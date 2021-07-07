import React from "react";
import "./Info.scss";
import Logo from "../../../../assets/img/png/Logo.png";
import { Typography } from "@material-ui/core";

export default function Info() {
  return (
    <div className="info">
      <img src={Logo} alt="MiCrédito" />
      <Typography variant="body1" color="initial">
      MiCrédito es la plataforma diseñada para calcular el puntaje scoring, que ayuda a determinar la probabilidad de aprobación de un crédito basado en información de carácter personal y financiera que las entidades bancarias tienen en cuenta para el conceder sus productos financieros.
      </Typography>
    </div>
  );
}
