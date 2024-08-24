import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import theme from "../../styles/theme";
import * as _ from "lodash";

interface Props {
  btnText: string;
  disabled?: boolean;
}

type AnimationButtonProps = Partial<ButtonProps> & Props;

const StyledButton = styled("button")({
  color: `${theme.palette.secondary.main} !important`,
  clipPath:
    "polygon(0 0, 90% 0, 100% 20%, 100% 100%, 100% 100%, 10% 100%, 0 80%)",
  "&:hover": {
    color: "#00ffa0 !important",
    filter:
      "drop-shadow(2px 0px 0px #00ffa0) drop-shadow(0px 0px 0px #00ffa0) drop-shadow(0px 0px 0px #00ffa0) drop-shadow(0px -2px 0px #00ffa0)",
  },
});

const AnimatedButton = ({
  btnText,
  disabled,
  ...restProps
}: AnimationButtonProps): JSX.Element => {
  return (
    <>
      <div>
        <Button
          disabled={disabled}
          component={StyledButton}
          {...restProps}
          variant='outlined'
        >
          {btnText}
        </Button>
      </div>
    </>
  );
};

export default AnimatedButton;
