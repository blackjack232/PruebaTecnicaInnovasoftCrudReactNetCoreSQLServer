import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Box from '@mui/material/Box';
import TablaInsert from '../components/TablaInsert';
import { useState } from 'react';
import { useEffect } from 'react';
import S from '../components/S';
//hola



export default function Content(props) {

  const [propiedad, setPropiedad] = useState();
  const [data, setData] = useState();
  const [estado, setEstado] = useState(1);
 
  const imprimirTabla = (item) => {


    if (item === 0) {
      setEstado(0);
    }


  }

  

 

  useEffect(() => {
  
    
    setPropiedad(props.props.value);
 
     setData(props.props.data);
 
    setEstado(1);
    
  


  }, [props])
  return (
    <>
      {propiedad === 0 ? (
        <Box component="main" sx={{ flex: 1, py: 2, px: 1, bgcolor: '#eaeff1' }}>
          <Paper sx={{ maxWidth: 1100, margin: 'auto', overflow: 'hidden' }}>
            
            
              {estado === 1 ? (

                
                  <div>
                  
                  
                    {/* <TablaInsert props={data}/> */}
                    <S props={data}/>
                  
                  </div>
                ):(
                  <div>
                     <h1>
                      No hay datos para mostrar
                    </h1>
                   
                  </div>
                )}
           
          </Paper>
        </Box>
      ) : propiedad === 1 ? (

        <Box component="main" sx={{ flex: 1, py: 2, px: 1, bgcolor: '#eaeff1' }}>

          <Paper sx={{ maxWidth: 1100, margin: 'auto', overflow: 'hidden' }}>
            <AppBar
              position="static"
              color="default"
              elevation={0}
              sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
              <Toolbar>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <SearchIcon color="inherit" sx={{ display: 'block' }} />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      fullWidth
                      placeholder="Buscar por codigo de Maquina"
                      InputProps={{
                        disableUnderline: true,
                        sx: { fontSize: 'default' },
                      }}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item>
                    <Button variant="contained" sx={{ mr: 1 }}>
                      Buscar Maquina
                    </Button>
                    <Tooltip title="Reload">
                      <IconButton>
                        <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
            <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">

              <div className="col-12 p-5 row">

                {/* {arregloImagenesPinBall.map((item, i) => (

                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" style={{ display: 'flex', marginTop: '50px' }} >
                    <div className="Estilo-Card">
                      <img src={imagenPinBall} alt={"tags"} width="80" />
                      <div className="card-body" >
                        <h4 className="card-text">Codigo: 00{i + 1} </h4>
                        <p className="card-text">Tipo : Pinball </p>

                        <a onClick={() => imprimirTabla(i)} target="_blank" className="btn btn-primary btn-block" style={{ display: 'flex' }} >
                          Ver Maquina
                        </a>

                      </div>
                    </div>
                  </div>
                )
                )} */}
              </div>
            </Typography>
          </Paper>
        </Box>
      ) : propiedad === 2 ? (

        <Box component="main" sx={{ flex: 1, py: 2, px: 1, bgcolor: '#eaeff1' }}>
          <Paper sx={{ maxWidth: 1100, margin: 'auto', overflow: 'hidden' }}>
            <AppBar
              position="static"
              color="default"
              elevation={0}
              sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
              <Toolbar>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <SearchIcon color="inherit" sx={{ display: 'block' }} />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      fullWidth
                      placeholder="Buscar por codigo de Maquina"
                      InputProps={{
                        disableUnderline: true,
                        sx: { fontSize: 'default' },
                      }}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item>
                    <Button variant="contained" sx={{ mr: 1 }}
                      onClick={() => setEstado(0)}>
                      Buscar Usuario por Codigo
                    </Button>
                    <Tooltip title="Reload">
                      <IconButton>
                        <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                      </IconButton>
                    </Tooltip>

                  </Grid>
                </Grid>
              </Toolbar>

            </AppBar>
            <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
              {estado == 1 ? (

                <div className="col-12 p-5 row">

                  {/* {arregloImagenesPinBall.map((item, i) => (

                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" style={{ display: 'flex', marginTop: '50px' }} >
                      <div className="Estilo-Card">
                        <img src={""} alt={"tags"} width="80" />
                        <div className="card-body" >
                          <h4 className="card-text">Codigo: 00{i + 1} </h4>
                          <p className="card-text">Tipo : Pinball </p>

                          <a onClick={() => imprimirTabla(i)} target="_blank" className="btn btn-primary btn-block" style={{ display: 'flex' }} >
                            Ver Usuario
                          </a>

                        </div>
                      </div>
                    </div>
                  )
                  )}


                  {arregloImagenesPicachu.map((item, i) => (

                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" style={{ display: 'flex', marginTop: '50px' }} >
                      <div className="Estilo-Card">
                        <img src={imagenPicachu} alt={"tags"} width="150" />
                        <div className="card-body">
                          <h4 className="card-text">Codigo: 00{i + 1} </h4>
                          <p className="card-text">Tipo : Picachu </p>

                          <a onClick={() => imprimirTabla(i)} target="_blank" className="btn btn-primary btn-block" style={{ display: 'flex' }} >
                            Ver Maquina
                          </a>

                        </div>
                      </div>



                    </div>
                  )
                  )}

                  {arregloImagenesBilletes.map((item, i) => (

                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" style={{ display: 'flex', marginTop: '50px' }} >
                      <div className="Estilo-Card">
                        <img src={imagenBilletes} alt={"tags"} width="80" />
                        <div className="card-body">
                          <h4 className="card-text">Codigo: 00{i + 1} </h4>
                          <p className="card-text">Tipo : Picachu </p>

                          <a onClick={() => imprimirTabla(i)} target="_blank" className="btn btn-primary btn-block" style={{ display: 'flex' }}>
                            Ver Maquina
                          </a>

                        </div>
                      </div>



                    </div>
                  )
                  )} */}


                </div>

              )
                :
                (
                  <div>

                    {/* <TablaInsert props={recaudos.getAllRecaudos} /> */}
                    <p>Aca debe de ir la tabla</p>
                  </div>
                )}
            </Typography>
          </Paper>
        </Box>

      ) : (
        // <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>

        //   <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
        //     <AppBar
        //       position="static"
        //       color="default"
        //       elevation={0}
        //       sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
        //     >
        //       <Toolbar>
        //         <Grid container spacing={2} alignItems="center">
        //           <Grid item>
        //             <SearchIcon color="inherit" sx={{ display: 'block' }} />
        //           </Grid>
        //           <Grid item xs>
        //             <TextField
        //               fullWidth
        //               placeholder="Buscar por E-mail"
        //               InputProps={{
        //                 disableUnderline: true,
        //                 sx: { fontSize: 'default' },
        //               }}
        //               variant="standard"
        //             />
        //           </Grid>
        //           <Grid item>
        //             <Button variant="contained" sx={{ mr: 1 }}>
        //               Agregar Otros
        //             </Button>
        //             <Tooltip title="Reload">
        //               <IconButton>
        //                 <RefreshIcon color="inherit" sx={{ display: 'block' }} />
        //               </IconButton>
        //             </Tooltip>
        //           </Grid>
        //         </Grid>
        //       </Toolbar>
        //     </AppBar>
        //     <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        //       Otros-----
        //     </Typography>
        //   </Paper>
        // </Box>


        <Box component="main" sx={{ flex: 1, py: 2, px: 1, bgcolor: '#eaeff1' }}>
          <Paper sx={{ maxWidth: 1100, margin: 'auto', overflow: 'hidden' }}>
            <AppBar
              position="static"
              color="default"
              elevation={0}
              sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
            >
              <Toolbar>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <SearchIcon color="inherit" sx={{ display: 'block' }} />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      fullWidth
                      placeholder="Buscar Por Codigo de Maquina"
                      InputProps={{
                        disableUnderline: true,
                        sx: { fontSize: 'default' },
                      }}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item>
                    <Button variant="contained" sx={{ mr: 1 }}
                      onClick={() => setEstado(0)}>
                      Buscar Maquina por Codigo
                    </Button>
                    <Tooltip title="Reload">
                      <IconButton>
                        <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                      </IconButton>
                    </Tooltip>

                  </Grid>
                </Grid>
              </Toolbar>

            </AppBar>
            <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
              {estado == 1 ? (

                <div className="col-12 p-5 row">

                  {/* {arregloImagenesPinBall.map((item, i) => (

                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" >
                      <div className="Estilo-Card">
                        <img src={imagenPinBall} alt={"tags"} width="80" />
                        <div className="card-body">
                          <h4 className="card-text">Codigo: 00{i + 1} </h4>
                          <p className="card-text">Tipo : Pinball </p>

                          <a onClick={() => imprimirTabla(i)} target="_blank" className="btn btn-primary btn-block" >
                            Ver Maquina
                          </a>

                        </div>
                      </div>
                    </div>
                  )
                  )}


                  {arregloImagenesPicachu.map((item, i) => (

                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" >
                      <div className="Estilo-Card">
                        <img src={imagenPicachu} alt={"tags"} width="200" />
                        <div className="card-body">
                          <h4 className="card-text">Codigo: 00{i + 1} </h4>
                          <p className="card-text">Tipo : Picachu </p>

                          <a onClick={() => imprimirTabla(i)} target="_blank" className="btn btn-primary btn-block" >
                            Ver Maquina
                          </a>

                        </div>
                      </div>



                    </div>
                  )
                  )}

                  {arregloImagenesBilletes.map((item, i) => (

                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" >
                      <div className="Estilo-Card">
                        <img src={imagenBilletes} alt={"tags"} width="80" />
                        <div className="card-body">
                          <h4 className="card-text">Codigo: 00{i + 1} </h4>
                          <p className="card-text">Tipo : Picachu </p>

                          <a onClick={() => imprimirTabla(i)} target="_blank" className="btn btn-primary btn-block" >
                            Ver Maquina
                          </a>

                        </div>
                      </div>



                    </div>
                  )
                  )} */}


                </div>

              )
                :
                (
                  <div>

                    {/* <TablaInsert props={recaudos.getAllRecaudos} /> */}
                    <p>Aca debe ir la tabla</p>
                  </div>
                )}
            </Typography>
          </Paper>
        </Box>

      )}
    </>
  );
}