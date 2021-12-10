import { FC } from "react";
import classNames from "classnames";

type Props = {
  icon: string;
  type?: "fal" | "fad" | "fas" | "far" | "fab";
  primaryColour?: string;
  secondaryColour?: string;
  fixedWidth?: boolean;
  className?: string;
};

const Icon: FC<Props> = ({ icon, type = "fad", primaryColour = null, secondaryColour = null, className = "" }) => {
  const iconclass = classNames(className, {
    [type]: true,
    [`fa-${icon}`]: true,
  });

  const styleObject: any = {};

  if (primaryColour) styleObject["--fa-primary-color"] = primaryColour;
  if (secondaryColour) {
    styleObject["--fa-secondary-color"] = secondaryColour;
    styleObject["--fa-secondary-opacity"] = "1.0";
  }

  return <i className={iconclass} style={styleObject} />;
};

export default Icon;
