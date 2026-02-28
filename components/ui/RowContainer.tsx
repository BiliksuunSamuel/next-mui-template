import { Stack, StackProps, styled } from "@mui/material";

interface IProps extends StackProps {}

const StyledStack = styled(Stack)(({}) => ({}));

export default function RowContainer({ children, ...others }: IProps) {
  return (
    <StyledStack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      direction="row"
      {...others}
    >
      {children}
    </StyledStack>
  );
}
