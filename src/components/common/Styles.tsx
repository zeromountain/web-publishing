import styled from '@emotion/styled';

export const Flex = styled.div(
  {
    display: 'flex',
  },
  (props: any) => ({
    justifyContent: props.justifyContent || 'flex-start',
    alignItems: props.alignItems || 'flex-start',
    flexDirection: props.flexDirection || 'row',
    flexWrap: props.flexWrap || 'nowrap',
    width: props.width || 'auto',
    height: props.height || 'auto',
    margin: props.margin || '0',
    padding: props.padding || '0',
    background: props.background || 'transparent',
    border: props.border || 'none',
    borderRadius: props.borderRadius || '0',
    boxShadow: props.boxShadow || 'none',
    overflow: props.overflow || 'visible',
    position: props.position || 'static',
    top: props.top || 'auto',
    right: props.right || 'auto',
    bottom: props.bottom || 'auto',
    left: props.left || 'auto',
    zIndex: props.zIndex || 'auto',
  })
);

export const Grid = styled.div`
  display: grid;
  grid-template-columns: props => props.gridTemplateColumns || 'auto';
  grid-template-rows: props => props.gridTemplateRows || 'auto';
  grid-template-areas: props => props.gridTemplateAreas || 'none';
  grid-auto-columns: props => props.gridAutoColumns || 'auto';
  grid-auto-rows: props => props.gridAutoRows || 'auto';
  grid-auto-flow: props => props.gridAutoFlow || 'row';
  grid-column-gap: props => props.gridColumnGap || '0';
  grid-row-gap: props => props.gridRowGap || '0';
  grid-column: props => props.gridColumn || 'auto';
  grid-row: props => props.gridRow || 'auto';
  grid-area: props => props.gridArea || 'auto';
  justify-items: props => props.justifyItems || 'stretch';
  align-items: props => props.alignItems || 'stretch';
  justify-content: props => props.justifyContent || 'stretch';
  align-content: props => props.alignContent || 'stretch';
  width: props => props.width || 'auto';
  height: props => props.height || 'auto';
  margin: props => props.margin || '0';
  padding: props => props.padding || '0';
  background: props => props.background || 'transparent';
  border: props => props.border || 'none';
  border-radius: props => props.borderRadius || '0';
  box-shadow: props => props.boxShadow || 'none';
  overflow: props => props.overflow || 'visible';
  position: props => props.position || 'static';
  top: props => props.top || 'auto';
  right: props => props.right || 'auto';
  bottom: props => props.bottom || 'auto';
  left: props => props.left || 'auto';
  z-index: props => props.zIndex || 'auto';
`;
