import styles from './Productlist.module.css'
import React, { useState,useEffect } from 'react' //react hook
import { Link } from 'react-router-dom';
import Title from './Title';
import QuantityBtn from './QuantityBtn';

/* let productList = [
  {'id': 1, 'name': '100', 'price':120, 'image':'100.jpg' ,'issueddate': '2006'},
  {'id': 2, 'name': 'XOXO', 'price':105, 'image':'XOXO.jpg' ,'issueddate': '2009'},
  {'id': 3, 'name': 'Yellow Fever', 'price':120, 'image':'YellowFever.jpg' ,'issueddate': '2006'},
  {'id': 4, 'name': '101', 'price':125, 'image':'101.jpg' ,'issueddate': '2016'},
  {'id': 5, 'name': 'Infinity & Eternity', 'price':126, 'image':'infinity-eternity.jpg' ,'issueddate': '2019'},
  {'id': 6, 'name': 'Limerence', 'price':120, 'image':'Limerence.jpg' ,'issueddate': '2020'},
  {'id': 7, 'name': 'Pendulum Tour 2021 Live (Live)', 'price':158, 'image':'Pendulum_Tour.jpg' ,'issueddate': '2021'}

]
 */

export default function ProductList() {

    let [productList, setProductList] = useState([])
    let [input , setInput] = useState('')

    //useEffect hook
    useEffect(()=>{

        //1 : 無第二個參數 : component每次render都會觸發
        //2 : Dependency Array是空array時 : 只會在第一次網頁render時會觸發
        //3 : Dependency Array是有變數時 : 第一次網頁render時 + 指定的變數改變 會觸發
        fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
            .then(response => response.json())
            .then(data => setProductList(data))
            
        console.log(productList)
    },[]) // <==  Dependency Array

    return (
        <>
            <Title mainTitle="請選擇要購買的水果" />
            
            <div>
                {
                    productList.map(product=>(
                        <React.Fragment className={styles.productBorder} key={product.id}>
                            {product.name}<br/>
                            {product.price}元/件<br/>
                            <Link to={'/product/'+product.id}>
                            <img src={process.env.PUBLIC_URL+'/img/'+product.image} alt={product.name} />
                            </Link>
                            <br/>
                            {product.description}<br/>
                            <QuantityBtn productInfo={product} />
                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}


