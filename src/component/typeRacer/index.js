import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, MuiThemeProvider } from 'material-ui';
import './style.css';
import { setWPM, setUserInput, setTextTyped, setTextRemaining } from '../../action';

class TypeRacer extends Component {
    constructor(props) {
        super(props);
        this.wordCount = 0;
        this.timer = undefined;
    }

    startWPMCount = () => {
        const { dispatch } = this.props;
        if (!this.timer) {
            this.timer = setInterval(() => {
                dispatch(setWPM(this.wordCount));
                this.wordCount = 0;
            }, 60 * 1000);
        }
    };

    //Need to change logic to accomodate backspace
    onChange = text => {
        const { dispatch, textRemaining, textTyped, masterPara } = this.props;
        dispatch(setUserInput(text));
        let typedText = textTyped;
        let unTypedText =  textRemaining;
        let lastTypedChar = text[text.length - 1];
        let tempText = typedText + lastTypedChar;
        let matchingText = masterPara.slice(0, tempText.length);

        if (matchingText === tempText) {
            typedText = tempText;
            unTypedText = masterPara.slice(typedText.length);
            if (lastTypedChar === " ") {
                this.wordCount++;
                dispatch(setUserInput(""));
            }
            dispatch(setTextTyped(typedText));
            dispatch(setTextRemaining(unTypedText));
        }
        if (!typedText) {
            this.timer && clearInterval(this.timer);
        }
    };

    render() {
        const { textTyped, textRemaining, wpm } = this.props;
        return (
            <div className="container">
                <h1 className="header">TypeRacer</h1>
                {
                    textRemaining && <div style={{ textAlign: "right" }}>{wpm} WPM</div>
                }
                <div className="question">
                    <span className="text-typed">{textTyped}</span>
                    <span className="text-remaining">{textRemaining}</span>
                </div>
                <MuiThemeProvider>
                    <TextField
                        hintText={"Type the above text here..."}
                        underlineStyle={{ borderColor: "#000" }}
                        underlineFocusStyle={{ borderColor: "#000" }}
                        onChange={(e) => this.onChange(e.target.value)}
                        onFocus={this.startWPMCount}
                    />
                </MuiThemeProvider>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    masterPara: state.masterPara,
    textTyped: state.textTyped,
    textRemaining: state.textRemaining,
    wpm: state.wordsPerMinute
})

export default connect(mapStateToProps)(TypeRacer);
