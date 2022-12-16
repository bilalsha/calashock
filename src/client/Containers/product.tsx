import React, { useState, useEffect } from 'react';
import Table from '../Components/Mui';
import styles from '../assets/styles/product.module.css';
import { Get } from '../Services';

const Product = () => {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState({
    loading: true,
    products: [],
    totalRows: 0,
    rowsPerPageOptions: [10],
    pageSize: 10,
    page: 1,
  });

  const updateData = (k: any, v: any) =>
    setData((prev) => ({ ...prev, [k]: v }));

  const fetchData = async (skip = 0) => {
    try {
      await Get(`/products?limit=10&skip=${skip}`, {}, (res: any) => {
        updateData('products', res.data.products);
        updateData('totalRows', res.data.total);
      });
    } catch (e) {
      updateData('products', []);
    }
  };

  const fetchCategories = async () => {
    try {
      await Get('/products/categories', {}, (res: any) => {
        setCategories(res.data);
      });
    } catch (e) {
      setCategories([]);
    }
  };

  const filterByCategory = async (e: string) => {
    try {
      if (e !== 'all') {
        await Get(`/products/category/${e}`, {}, (res: any) => {
          updateData('products', res.data.products);
          updateData('totalRows', res.data.total);
        });
      } else {
        fetchData();
      }
    } catch (e) {
      updateData('products', []);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    updateData('loading', true);
    fetchData(data.page === 1 ? 0 : data.page * data.pageSize);
    updateData('loading', false);
  }, [data.page, data.pageSize]);

  return (
    <main className={styles.main_section}>
      <div className={styles.container}>
        <div className={styles.search_section}>
          <i className={`fas fa-search ${styles.search_icon}`}></i>
          <select
            className={styles.search_input}
            onChange={(e) => filterByCategory(e.target.value)}
          >
            <option value="all">All</option>
            {categories.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <Table
          products={data.products}
          updateData={updateData}
          rowCount={data.totalRows}
          loading={data.loading}
          rowsPerPageOptions={data.rowsPerPageOptions}
          pageSize={data.pageSize}
          page={data.page}
        />
      </div>
    </main>
  );
};

export default Product;
