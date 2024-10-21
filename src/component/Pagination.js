import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({getPage,pagee}) {
    
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    getPage(value);
  };

  return (
    <div className='flex justify-center text-center'>
        <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={pagee} page={page} onChange={handleChange}/>
        </Stack>
    </div>
    
  );
}