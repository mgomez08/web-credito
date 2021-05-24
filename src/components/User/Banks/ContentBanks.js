import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "320px",
      maxWidth: "940px",
    },
    [theme.breakpoints.down("md")]: {
      minWidth: "320px",
      maxWidth: "1000px",
    },
    [theme.breakpoints.down("lg")]: {
      minWidth: "320px",
      maxWidth: "1000px",
    },
    [theme.breakpoints.down("xl")]: {
      minWidth: "320px",
      maxWidth: "1000px",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  background: {
    backgroundColor: "#155FA0",
  },
  color: {
    color: "#FFFFFF",
  },
}));

export const ContentBanks = () => {
  const banks = [
    {
      name: "Banco Agrario",
      products: [
        {
          nameProduct: "Crédito Hipotecario",
          tasaMensual: "0.85",
          tasaAnual: "10.70",
        },
        {
          nameProduct: "Crédito de Libre Inversión",
          tasaMensual: "0.96",
          tasaAnual: "12.2",
        },
        {
          nameProduct: "Tarjeta de Crédito",
          tasaMensual: "2.01",
          tasaAnual: "26.97",
        },
      ],
    },
    {
      name: "Banco Caja Social",
      products: [
        {
          nameProduct: "Crédito Hipotecario",
          tasaMensual: "1.00",
          tasaAnual: "12.70",
        },
        {
          nameProduct: "Crédito de Libre Inversión",
          tasaMensual: "1.99",
          tasaAnual: "26.65",
        },
        {
          nameProduct: "Tarjeta de Crédito",
          tasaMensual: "1.79",
          tasaAnual: "23.68",
        },
      ],
    },
    {
      name: "Banco Davivienda",
      products: [
        {
          nameProduct: "Crédito Hipotecario",
          tasaMensual: "1.12",
          tasaAnual: "14.25",
        },
        {
          nameProduct: "Crédito de Libre Inversión",
          tasaMensual: "2.02",
          tasaAnual: "27.12",
        },
        {
          nameProduct: "Tarjeta de Crédito",
          tasaMensual: "2.05",
          tasaAnual: "27.64",
        },
      ],
    },
    {
      name: "Banco de Occidente",
      products: [
        {
          nameProduct: "Crédito Hipotecario",
          tasaMensual: "0.79",
          tasaAnual: "9.95",
        },
        {
          nameProduct: "Crédito de Libre Inversión",
          tasaMensual: "1.87",
          tasaAnual: "24.87",
        },
        {
          nameProduct: "Tarjeta de Crédito",
          tasaMensual: "2.01",
          tasaAnual: "26.99",
        },
      ],
    },
    {
      name: "Banco Popular",
      products: [
        {
          nameProduct: "Crédito Hipotecario",
          tasaMensual: "0.82",
          tasaAnual: "10.29",
        },
        {
          nameProduct: "Crédito de Libre Inversión",
          tasaMensual: "1.78",
          tasaAnual: "23.65",
        },
        {
          nameProduct: "Tarjeta de Crédito",
          tasaMensual: "1.67",
          tasaAnual: "22.05",
        },
      ],
    },
    {
      name: "Banco Bogotá",
      products: [
        {
          nameProduct: "Crédito Hipotecario",
          tasaMensual: "0.91",
          tasaAnual: "11.50",
        },
        {
          nameProduct: "Crédito de Libre Inversión",
          tasaMensual: "2.07",
          tasaAnual: "27.94",
        },
        {
          nameProduct: "Tarjeta de Crédito",
          tasaMensual: "2.08",
          tasaAnual: "28.01",
        },
      ],
    },
    {
      name: "Bancolombia",
      products: [
        {
          nameProduct: "Crédito Hipotecario",
          tasaMensual: "0.78",
          tasaAnual: "9.80",
        },
        {
          nameProduct: "Crédito de Libre Inversión",
          tasaMensual: "1.90",
          tasaAnual: "25.35",
        },
        {
          nameProduct: "Tarjeta de Crédito",
          tasaMensual: "2.04",
          tasaAnual: "27.42",
        },
      ],
    },
  ];
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {banks.map((bank, id) => {
        return (
          <Accordion className={classes.background} key={id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                gutterBottom
                variant="h6"
                className={(classes.heading, classes.color)}
              >
                {bank.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  size="small"
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Producto Financiero</TableCell>
                      <TableCell align="right">Tasa Efectiva Mensual</TableCell>
                      <TableCell align="right">Tasa Efectiva Anual</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {bank.products.map((product, idProduct) => {
                      return (
                        <TableRow key={idProduct}>
                          <TableCell component="th" scope="row">
                            {product.nameProduct}
                          </TableCell>
                          <TableCell align="right">
                            {product.tasaMensual}%
                          </TableCell>
                          <TableCell align="right">
                            {product.tasaAnual}%
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};
