'use client'

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import useSearchModal from '../client/hooks/useSearchModal';
import Modal from './Modal';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { FileDto } from '@/types/File';

export default function SearchModal() {

const searchModal = useSearchModal()
const [ fileName, setFileName ] = useState("");
const [ data, setData ] = useState<FileDto[]>([]);
const [ isLoading, setIsLoading ] = useState(false);
console.log(data)

const onSubmit = () => {
  setIsLoading(true);
  axios.get(`/api/file/${fileName}`)
  .then((e) => {
    setData(e.data.files as FileDto[]);
    toast.success('Listing created!')
    setIsLoading(false);
  })
  .catch(() => {
    toast.error('Something went wrong.');
  })
  .finally(() => {
    setIsLoading(false);
  })
}

  const bodyContent  = (
    <Autocomplete
        key={"search"}
            size='small'
            options={ []}
            loadingText= "Carragendo..."
            selectOnFocus
            clearText='Limpar'
            loading={isLoading}
            onInputChange={(event, newInputValue) => {
              (async () => {
                if(newInputValue.length !== 0){
                  setFileName(newInputValue);
                }
              })();
            }}
            id="asynchronous-demo"
            sx={{ width:"100%", maxWidth: "500px", cbgcolor: "secondary"}}
            renderInput={(params) => {

              return (
              <TextField
                {...params}
                label="pesquisar"
                variant="outlined"
                color='secondary'

              />)
            }}

      />)
      return (
        <Modal
          // disabled={isLoading}
          isOpen={searchModal.isOpen}
          title="Pesquisar"
          onClose={searchModal.onClose}
          actionLabel='Buscar'
          onSubmit={onSubmit}
          disabled={isLoading}
          body={bodyContent}
        />
      );
    // <Autocomplete
    //   key={"search"}
    //   size='small'
    //   isOptionEqualToValue={(option, value) => option.id === value.id}
    //   getOptionLabel={(option) => (option as FindLinkDto).attributes.title}
    //   options={searchValue !== ""? result?.data ?? [] : []}
    //   loading={isFetching}
    //   loadingText= "Carragendo..."
    //   noOptionsText={searchValue !== "" ? `Nenhum resutado encontrado para "${searchValue}"`: null}
    //   selectOnFocus
    //   clearText='Limpar'
    //   onInputChange={(event, newInputValue) => {
    //     (async () => {
    //       if(newInputValue.length !== 0){
    //         setSearchParams({search :newInputValue});
    //       }else {
    //         setSearchParams();
    //       }
    //     })();
    //   }}
    //   id="asynchronous-demo"
    //   sx={{ width:"100%", maxWidth: "500px", cbgcolor: "secondary"}}
    //   renderInput={(params) => {
    //     params = {
    //       ...params,
    //       inputProps : {
    //         ...params.inputProps,
    //         value: searchValue
    //       }
    //     }
    //     return (
    //     <TextField
    //       {...params}
    //       label="pesquisar"
    //       variant="outlined"
    //       color='secondary'
    //       InputProps={{
    //         ...params.InputProps,
    //         endAdornment: (
    //           <React.Fragment>
    //             {isFetching && <CircularProgress color="inherit" size={10} />}
    //             {<IconButton sx={{ mr: -4}} onClick={(e)=>handleClose(e)} size="small" children={<GridClearIcon fontSize="small" />} />}
    //           </React.Fragment>
    //         ),
    //       }}
    //     />)
    //   }}
    //   renderOption={(props, option)=>(
    //     searchValue !== "" && <li {...props}>
    //        <CardActionArea component="a" href={option.attributes.url}>
    //           <Grid container alignItems="center">
    //             <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
    //                 <Box
    //                   component="span"
    //                   sx={{ fontWeight: 'regular' }}
    //                 >
    //                   {option.attributes.title}
    //                 </Box>
    //               <Typography variant="body2" color="text.secondary">
    //                 {option.attributes.subtitle}
    //               </Typography>
    //             </Grid>
    //             <Grid item sx={{ display: 'flex', width: 44, pl:1 }}>
    //               <Avatar
    //                 variant="rounded"
    //                 alt="title"
    //                 src={handleExtension(option.attributes.extension)}
    //               />
    //             </Grid>
    //           </Grid>
    //           <Divider />
    //        </CardActionArea>
    //     </li>
    //   )}
    // />
  // );
}

