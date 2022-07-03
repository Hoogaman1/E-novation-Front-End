import React from 'react';
import deepmerge from 'deepmerge';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ThemeConsumer } from './ThemeProvider';
import { defaultSpacing } from './theme';
import { lightColors } from './colors';
const isClassComponent = (Component) => Boolean(Component?.prototype?.isReactComponent);
const combineByStyles = (propName = '') => {
    if (propName.endsWith('Style') || propName.endsWith('style')) {
        return (prop1, prop2) => {
            return [prop1, prop2].flat();
        };
    }
    return undefined;
};
const ThemedComponent = (WrappedComponent, themeKey, displayName) => {
    return Object.assign((props, forwardedRef) => {
        const { children, ...rest } = props;
        return (<ThemeConsumer>
          {({ theme, updateTheme, replaceTheme }) => {
                if (!theme) {
                    const newProps = {
                        ...rest,
                        theme: { colors: lightColors, spacing: defaultSpacing },
                        children,
                    };
                    return isClassComponent(WrappedComponent) ? (<WrappedComponent ref={forwardedRef} {...newProps}/>) : (<WrappedComponent {...newProps}/>);
                }
                const themedProps = typeof theme[themeKey] === 'function'
                    ? theme[themeKey]?.(rest)
                    : theme[themeKey];
                const newProps = {
                    theme: {
                        colors: theme.colors,
                        mode: theme.mode,
                        spacing: theme.spacing,
                    },
                    updateTheme,
                    replaceTheme,
                    ...deepmerge(themedProps || {}, rest, {
                        customMerge: combineByStyles,
                        clone: false,
                    }),
                    children,
                };
                if (isClassComponent(WrappedComponent)) {
                    return <WrappedComponent ref={forwardedRef} {...newProps}/>;
                }
                return <WrappedComponent {...newProps}/>;
            }}
        </ThemeConsumer>);
    }, { displayName: displayName });
};
function withTheme(WrappedComponent, themeKey) {
    const name = themeKey
        ? `Themed.${themeKey}`
        : `Themed.${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`;
    const Component = ThemedComponent(WrappedComponent, themeKey, name);
    if (isClassComponent(WrappedComponent)) {
        return hoistNonReactStatics(React.forwardRef(Component), WrappedComponent);
    }
    return Component;
}
export default withTheme;
