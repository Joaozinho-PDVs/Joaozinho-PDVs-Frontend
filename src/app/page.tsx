'use client'
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTheme } from "@mui/material/styles";
import { BarChart } from '@mui/x-charts/BarChart';
import Image from "next/image";

const prodDataTest = [
  {iconUrl: "", name: "Produto 1", code: "1234"},
  {iconUrl: "", name: "Produto 2", code: "1234"},
  {iconUrl: "", name: "Produto 3", code: "1234"},
  {iconUrl: "", name: "Produto 4", code: "1234"},
]

const formatter = new Intl.DateTimeFormat("pt-BR", {
  weekday: "short",
  day: "2-digit",
});

const toPtBrDate = (date:Date) => {
  return formatter.format(date).split(".,").toString()
}

export default function Dashboard() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: "primary.contrastText",
        color: "primary.dark",
        display:"flex",
        flexDirection: "row",
        height: "calc( 100vh - 64px )",
        width: "100%"
      }}
    >
      {/* GRÁFICOS */}
      <Box
        sx={{
          flexGrow: 1,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{
          display: "flex",
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center",
          padding: "10px"
        }}>
          <Typography variant="h5" sx={{
            fontWeight: "600", 
            padding: "15px",
          }}>
            Número de vendas
          </Typography>
          <BarChart
            xAxis={[{ 
              data: [
                new Date(2025, 6, 12),
                new Date(2025, 6, 13),
                new Date(2025, 6, 14),
                new Date(2025, 6, 15),
                new Date(2025, 6, 16),
                new Date(2025, 6, 17),
                new Date(2025, 6, 18),
              ], 
              valueFormatter: (value:Date) => toPtBrDate(value)
            }]}
            series={[{ data: [33, 42, 22, 70, 10, 46, 29], color: theme.palette.primary.main}]}
            height={300}
            sx={{
              maxWidth: "800px",
              width: "100%",
            }}
          />
          <Typography variant="h5" sx={{
            fontWeight: "600", 
            padding: "15px",
          }}>
            Receita (12/06/2025 - 18/06/2025)
          </Typography>
          <BarChart
            xAxis={[{ 
              data: [
                new Date(2025, 6, 12),
                new Date(2025, 6, 13),
                new Date(2025, 6, 14),
                new Date(2025, 6, 15),
                new Date(2025, 6, 16),
                new Date(2025, 6, 17),
                new Date(2025, 6, 18),
              ], 
              valueFormatter: (value:Date) => toPtBrDate(value)
            }]}
            series={[{ data: [1001, 2333, 2200, 2222, 1500, 4455, 1122], color: theme.palette.primary.main}]}
            height={300}
            sx={{
              maxWidth: "800px",
              width: "100%",
            }}
          />
        </Box>
        
      </Box>
      <Box
        sx={{
          display:"flex",
          alignItems: "center",
          flexDirection: "column",
          width: "350px",
          borderStyle: "solid",
          borderLeftWidth: "1px",
          borderRightWidth: "0px",
          borderTopWidth: "0px",
          borderBottomWidth: "0px"
        }}
      >
        <Typography variant="h5" sx={{fontWeight: "600", padding: "15px"}}>
          Produtos sem estoque
        </Typography>

        <Stack spacing={1} direction={"column"}>
          {prodDataTest.map((prod, prodKey) => {
            return(
              <Box
                key={prodKey}
                sx={{
                  width: "300px",
                  height: "64px",
                  border: "solid 1px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px"
                }}
              >
                <Avatar> </Avatar>
                <Typography sx={{flexGrow: 1, paddingInline: "10px"}}>
                  {prod.name}
                </Typography>
                <Typography sx={{paddingInline: "10px"}}>
                  {prod.code}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}
