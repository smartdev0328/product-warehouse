import React, { useEffect, useState } from 'react';
import Card from '../components/details/Card';
import Sticky from "../components/details/Sticky";
import { getAllCategories } from '../api/type.api';

export default function Details() {

  const productList = [
    {
      category: 'TV',
      specific: {
        screentype: 'LED',
        screensize: '1920 * 1080'
      },
      name: 'Product1',
      skus: 'SKU1',
      brand: 'Brand1',
      cost: 12312
    },
    {
      category: 'TV',
      specific: {
        screentype: 'LED',
        screensize: '1920 * 1080'
      },
      name: 'Product1',
      skus: 'SKU1',
      brand: 'Brand1',
      cost: 12312
    },
    {
      category: 'TV',
      specific: {
        screentype: 'LED',
        screensize: '1920 * 1080'
      },
      name: 'Product1',
      skus: 'SKU1',
      brand: 'Brand1',
      cost: 12312
    },
    {
      category: 'TV',
      specific: {
        screentype: 'LED',
        screensize: '1920 * 1080'
      },
      name: 'Product1',
      skus: 'SKU1',
      brand: 'Brand1',
      cost: 12312
    },
    {
      category: 'TV',
      specific: {
        screentype: 'LED',
        screensize: '1920 * 1080'
      },
      name: 'Product1',
      skus: 'SKU1',
      brand: 'Brand1',
      cost: 12312
    },
    {
      category: 'TV',
      specific: {
        screentype: 'LED',
        screensize: '1920 * 1080'
      },
      name: 'Product1',
      skus: 'SKU1',
      brand: 'Brand1',
      cost: 12312
    },
    {
      category: 'TV',
      specific: {
        screentype: 'LED',
        screensize: '1920 * 1080'
      },
      name: 'Product1',
      skus: 'SKU1',
      brand: 'Brand1',
      cost: 12312
    },
    {
      category: 'TV',
      specific: {
        screentype: 'LED',
        screensize: '1920 * 1080'
      },
      name: 'Product1',
      skus: 'SKU1',
      brand: 'Brand1',
      cost: 12312
    },
  ]
  const [listData, setListData] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      const data = await getAllCategories();
      const categoryList = [{ id: 0, name: "ALL" }];
      data.forEach(element => {
        categoryList.push({ id: element._id, name: element.name });
      });
      setListData(categoryList);
    }
    getCategories();
  }, [])

  const categoryChange = (categoryId) => {
    console.log(categoryId)
  }
  return (
    <>
      <div className='w-full'>
        <div className='w-4/5 m-auto flex flex-wrap items-center justify-start' >
          {
            productList && productList.length > 0 && productList.map((product, index) => {
              return (
                <Card product={product} key={index}></Card>
              )
            })
          }
        </div>
      </div>
      <Sticky listData={listData} onClickList={categoryChange} />
    </>
  )
}