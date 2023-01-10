import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getDataFromPath } from "../../../utils/data";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import TextMaxLine from "../../TextMaxLines";

type Props = {
  headers: Record<string, string>;
  rows: Array<Record<string, any>>;
  allCount?: number;
};

const DataPreview: React.VFC<Props> = ({ headers, rows, allCount }) => {
  return (
    <StyledAccordion defaultExpanded={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          Preview Data {allCount && ` (${rows.length}/${allCount})`}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer style={{ maxHeight: 300 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {Object.entries(headers).map(([key, value]) => (
                    <TableCell key={`head-cell-${key}`}>{value}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={Object.entries(headers).length}
                      align="center"
                    >
                      No records found
                    </TableCell>
                  </TableRow>
                )}
                {rows.map((row, index) => (
                  <TableRow
                    key={`row-${index}`}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {Object.keys(headers).map((key) => (
                      <TableCell
                        key={`row-${index}-cell-${key}`}
                        sx={{ maxHeight: 50, overflow: "auto" }}
                      >
                        <TextMaxLine line={3}>
                          {getDataFromPath(row, key)}
                        </TextMaxLine>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </AccordionDetails>
    </StyledAccordion>
  );
};

export default DataPreview;

const StyledAccordion = styled(Accordion)`
  max-width: 100%;
`;
