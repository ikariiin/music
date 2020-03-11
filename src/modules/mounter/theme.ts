import { createTheme, Customizations } from "office-ui-fabric-react";

const theme = createTheme({
  palette: {
    themePrimary: '#19e09a',
    themeLighterAlt: '#010906',
    themeLighter: '#042419',
    themeLight: '#07432e',
    themeTertiary: '#0f875d',
    themeSecondary: '#16c588',
    themeDarkAlt: '#2de3a4',
    themeDark: '#4be8b1',
    themeDarker: '#77eec4',
    neutralLighterAlt: '#282828',
    neutralLighter: '#313131',
    neutralLight: '#3f3f3f',
    neutralQuaternaryAlt: '#484848',
    neutralQuaternary: '#4f4f4f',
    neutralTertiaryAlt: '#6d6d6d',
    neutralTertiary: '#e4e4e4',
    neutralSecondary: '#e8e8e8',
    neutralPrimaryAlt: '#ededed',
    neutralPrimary: '#d6d6d6',
    neutralDark: '#f6f6f6',
    black: '#fafafa',
    white: '#1f1f1f',
  },
  defaultFontStyle: {
    fontFamily: "'Work Sans', Poppins, Roboto, 'Segoes UI', sans-serif",
    fontWeight: 500,
    letterSpacing: ".3px",
    fontSize: 16
  }
});

console.log("I apply");


Customizations.applySettings({ theme });