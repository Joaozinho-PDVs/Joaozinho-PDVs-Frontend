'use client'

import { Add, Cancel, Delete, Remove, Search } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Divider, Grid, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";

import { products } from "@/utils/productsPlaceholder"
import { useEffect, useState } from "react";
import { useTheme } from '@mui/material/styles';

const tags = ["Cereais", "Massas", "Laticínios", "Carnes", "Frutas", "Bebidas", "Doces", "Salgadinhos"]
// const products = [
//   {
//     name: "Pamonha",
//     price: "08,50",
//     qnt: "10",
//     tag: "Doces",
//     code: "12345678"
//   }
// ]

function SearchAdornment() {
  return(
    <InputAdornment position="end">
      <IconButton>
        <Search />
      </IconButton>
    </InputAdornment>
  );
}

interface ProductsProps {
  name: string;
  price: string;
  qnt: string;
  tag: string;
  code: string;
}

interface ProductListProps {
  id: string
  name: string
  price: string
  qnt: number
}

// function sumTotalValue(products: ProductListProps){

// }

export default function PDV(){
  // const [products, setProducts] = useState<ProductsProps[]>([]);
  const [productList, setProductList] = useState<ProductListProps[]>([]);

  // useEffect(() => {
  //   async function refreshData(){
  //     try {
  //       const response = await fetch("/api/produtos");
  //       if (!response.ok) {
  //         throw new Error('Erro na requisição')
  //       }else{
  //         const resData = await response.json();
  //         console.log(resData);
  //         setProducts(resData);
  //       }
  //     }catch(error){
  //       console.error('Erro:', error);
  //     }
  //   }
  //   refreshData();
  //   const interval = setInterval(refreshData, 5000);
  //   return () => clearInterval(interval);
  // }, [])

  const theme = useTheme();

  const date = new Date().toLocaleDateString("pt-BR",{
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const sumTotalValue = (products: ProductListProps[]): string => {
    let count = 0;
    products.map((product) => {
      count = count + (product.qnt * Number(product.price.replace(",", ".")))
    });

    return(String(count.toFixed(2).replace(".", ",")));
  }

  return(
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
      {/* PARTE CENTRAL QUE PESQUISA ITENS */}
      <Box
        sx={{
          display:"flex",
          flexDirection: "column",
          height: "100%",
          width: "70%",
          padding: "20px",
          alignItems: "center",
          bgcolor: "#f8f8fa"
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            display:"flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="h5" sx={{
            display: "flex", 
            flexDirection: "row", 
            fontWeight: "600",
            alignItems: "center"
          }}>
            Conveniência <Typography sx={{marginLeft: "10px"}}>{date}</Typography>
          </Typography>
          <TextField 
            sx={{
              width: "400px",
              minWidth: "300px"
            }}
            label="Pesquisar" 
            slotProps={{
              input: {
                endAdornment: (
                  <SearchAdornment/>
                ),
              },
            }}
          />
        </Box>
        <Stack
          spacing={1}
          direction={"row"}
          sx={{marginBlock: "20px"}}
        >
          {tags.map((tag, tagKey) => {
            return(<Chip key={tagKey} label={tag} />);
          })}
        </Stack>
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            overflow: "auto",
            padding: "10px"
          }}
        >
          <Grid container spacing={2}>
            {products.map((product, productKey) => {
              return(
                <Grid key={productKey} size={{xs: 12, sm: 6, md: 4, lg: 2}}>
                  <Card elevation={3} sx={{ width: "100%", bgcolor: "" }}>
                    <CardMedia
                      sx={{ height: 270 }}
                      image="/placeholderBg.webp"
                      title={product.name}
                    />
                    <CardContent>
                      <Typography>
                        {product.name}
                      </Typography>
                      <Typography>
                        R${product.price}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={() => {
                        const existsOnList = productList.map((prod) => {
                          if(product.code == prod.id)
                          return(true);
                        });

                        if(existsOnList[0] != true){
                          setProductList([
                            ...productList,
                            {
                              id: product.code,
                              name: product.name,
                              price: product.price,
                              qnt: 1,
                            },
                          ]);
                        }
                        
                      }}>
                        Adicionar
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
      {/* BARRA LATERAL */}
      <Box
        sx={{
          display:"flex",
          flexDirection: "column",
          height: "100%",
          width: "30%",
          padding: "20px",
          alignItems: "center",
          bgcolor: "#f8f8fa"
        }}
      >
        <Card elevation={3} sx={{display: "flex", flexDirection: "column", width: "100%", height: "100%"}}>
          <CardContent sx={{flexGrow: 1, overflow: "auto"}} >
            {/* Header */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Typography variant="h4">
                Venda
              </Typography>
              <IconButton onClick={() => setProductList([])}>
                <Cancel/>
              </IconButton>
            </Box>

            {/* SELECTED PRODUCTS LIST */}
            <Box sx={{}}>
            <Stack spacing={2} sx={{marginBlock: "10px"}}>
              {productList.map((product, productKey) => {
                return(
                  <Card key={productKey} elevation={5} sx={{
                    width: "100%", 
                    height: "80px", 
                    display: "flex",
                    flexDirection: "row"
                  }}>
                    <CardMedia
                      sx={{ width: "80px" }}
                      image="/placeholderBg.webp"
                      title={product.name}
                    />
                    <CardContent sx={{
                      flexGrow: 1,
                      display:"flex", 
                      flexDirection: "row", 
                      padding: "10px", 
                      '&:last-child': {
                        pb: "10px",
                      },
                    }}>
                      <Box sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        height: "100%"
                      }}>
                        <Typography sx={{fontWeight: "600"}}> 
                          {product.name} 
                        </Typography>
                        <Typography variant="h6" sx={{fontWeight: "600", color: "primary.main"}}>
                          R${product.price}
                        </Typography>
                      </Box>
                      {/* CAIXA DE AÇÕES */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100px",
                          height: "100%",
                          justifyContent: "space-between"
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row-reverse"
                          }}
                        >
                          <IconButton size="small">
                            <Delete 
                              onClick={() => {
                                setProductList(
                                  productList.filter((prod) => prod.id !== product.id)
                                );
                              }} 
                              fontSize="small"
                            />
                          </IconButton>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            justifyContent: "space-between",
                            alignItems: "center"
                          }}
                        >
                          <IconButton 
                            onClick={() => {
                              const newQnt = product.qnt + 1;
                              const newProducts = productList.map((prod, id) => {
                                if(id == productKey){
                                  prod.qnt = newQnt;
                                  return(prod);
                                }else{
                                  return(prod);
                                }
                              });
                              setProductList(newProducts);
                            }}
                            size="small" 
                            sx={{
                              border: `2px solid ${theme.palette.primary.main}`,
                              borderRadius: '6px',
                              padding: "3px"
                            }}
                          >
                            <Add fontSize="small"/>
                          </IconButton>
                          <Typography> {product.qnt} </Typography>
                          <IconButton 
                            size="small" 
                            disabled={(product.qnt <= 0)}
                            sx={{
                              border: `2px solid ${theme.palette.primary.main}`,
                              borderRadius: '6px',
                              padding: "3px"
                            }}
                            onClick={() => {
                              const newQnt = product.qnt - 1;
                              const newProducts = productList.map((prod, id) => {
                                if(id == productKey){
                                  prod.qnt = newQnt;
                                  return(prod);
                                }else{
                                  return(prod);
                                }
                              });
                              setProductList(newProducts);
                            }}
                          >
                            <Remove fontSize="small"/>
                          </IconButton>
                        </Box>
                      </Box>
                      
                    </CardContent>
                  </Card>
                );
              })}
              
            </Stack>
            </Box>
          </CardContent>
          <CardActions sx={{display: "flex", flexDirection: "column",justifyContent: "center", paddingBlock: "20px"}}>
            
            <Divider orientation="horizontal" flexItem />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                padding: "20px",
                marginBlock: "20px"
              }}
            >
              <Typography variant="h6">Total</Typography>
              <Typography> R${sumTotalValue(productList)} </Typography>
            </Box>
            <Button 
              onClick={async () => {
                try {
                  const response = await fetch('/api/addVenda', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      // JSON A SER ENVIADO NO POST
                    }),
                  });
                  if (!response.ok) throw new Error('Erro na requisição');
                  const resData = await response.json();
                  console.log(resData);
                } catch (error) {
                  console.error('Erro:', error);
                }
                setProductList([]);
              }} 
              variant="contained" 
              size="large"
            >
              Finalizar Venda
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}