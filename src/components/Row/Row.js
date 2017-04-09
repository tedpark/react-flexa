import { PropTypes } from 'react';

const Row = '';

const displayOptions = ['flex', 'flex-inline'];
const flexDirectionOptions = ['row', 'row-reverse', 'column', 'column-reverse'];
const flexWrapOptions = ['nowrap', 'wrap', 'wrap-reverse'];
const justifyContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];
const alignItemsOptions = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
const alignContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch '];

Row.PropTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  hidden: PropTypes.bool,

  gutter: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),

  display: PropTypes.oneOfType([
    PropTypes.oneOf(displayOptions),
    PropTypes.shape({
      xs: PropTypes.oneOf(displayOptions),
      sm: PropTypes.oneOf(displayOptions),
      md: PropTypes.oneOf(displayOptions),
      lg: PropTypes.oneOf(displayOptions),
    }),
  ]),

  flexDirection: PropTypes.oneOfType([
    PropTypes.oneOf(flexDirectionOptions),
    PropTypes.shape({
      xs: PropTypes.oneOf(flexDirectionOptions),
      sm: PropTypes.oneOf(flexDirectionOptions),
      md: PropTypes.oneOf(flexDirectionOptions),
      lg: PropTypes.oneOf(flexDirectionOptions),
    }),
  ]),

  flexWrap: PropTypes.oneOfType([
    PropTypes.oneOf(flexWrapOptions),
    PropTypes.shape({
      xs: PropTypes.oneOf(flexWrapOptions),
      sm: PropTypes.oneOf(flexWrapOptions),
      md: PropTypes.oneOf(flexWrapOptions),
      lg: PropTypes.oneOf(flexWrapOptions),
    }),
  ]),

  justifyContent: PropTypes.oneOfType([
    PropTypes.oneOf(justifyContentOptions),
    PropTypes.shape({
      xs: PropTypes.oneOf(justifyContentOptions),
      sm: PropTypes.oneOf(justifyContentOptions),
      md: PropTypes.oneOf(justifyContentOptions),
      lg: PropTypes.oneOf(justifyContentOptions),
    }),
  ]),

  alignItems: PropTypes.oneOfType([
    PropTypes.oneOf(alignItemsOptions),
    PropTypes.shape({
      xs: PropTypes.oneOf(alignItemsOptions),
      sm: PropTypes.oneOf(alignItemsOptions),
      md: PropTypes.oneOf(alignItemsOptions),
      lg: PropTypes.oneOf(alignItemsOptions),
    }),
  ]),

  alignContent: PropTypes.oneOfType([
    PropTypes.oneOf(alignContentOptions),
    PropTypes.shape({
      xs: PropTypes.oneOf(alignContentOptions),
      sm: PropTypes.oneOf(alignContentOptions),
      md: PropTypes.oneOf(alignContentOptions),
      lg: PropTypes.oneOf(alignContentOptions),
    }),
  ]),
};

Row.displayName = 'Row';

export default Row;