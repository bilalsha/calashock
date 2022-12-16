import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Rating } from '@mui/material';

const columns: GridColDef[] = [
  {
    field: 'thumbnail',
    headerName: 'IMG',
    width: 80,
    sortable: false,
    renderCell: (params: GridRenderCellParams<string | undefined>) => (
      <img
        src={params.value}
        height="30"
        width="30"
        style={{ marginLeft: '10px' }}
        alt="product"
      />
    ),
  },
  {
    field: 'title',
    headerName: 'Product Name',
    sortable: false,
    flex: 1,
    minWidth: 150,
  },
  { field: 'brand', headerName: 'Brand', sortable: false, width: 130 },
  { field: 'category', headerName: 'Category', sortable: false, width: 130 },
  { field: 'price', headerName: 'Price', width: 130 },
  {
    field: 'rating',
    headerName: 'Rating',
    width: 130,
    valueFormatter: (params: { value: { rate: number | undefined } }) =>
      params.value.rate,
    renderCell: (params: GridRenderCellParams<number | undefined>) => (
      <Rating
        size="small"
        readOnly
        defaultValue={params.value}
        precision={0.5}
      />
    ),
  },
];

const DataTable = ({
  updateData,
  products,
  pageSize,
  loading,
  rowCount,
  rowsPerPageOptions,
  page,
}: any) => {
  return (
    <div style={{ height: 635, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        pagination
        paginationMode="server"
        rowCount={rowCount}
        rowsPerPageOptions={rowsPerPageOptions}
        page={page - 1}
        pageSize={pageSize}
        disableColumnMenu
        disableSelectionOnClick
        loading={loading}
        onPageChange={(page) => {
          updateData('page', page + 1);
        }}
        onPageSizeChange={(pageSize) => {
          updateData('page', 1);
          updateData('pageSize', pageSize);
        }}
      />
    </div>
  );
};

export default DataTable;
