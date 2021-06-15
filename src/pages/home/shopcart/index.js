import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import styles from './index.css';
function Shopcart({dispatch,list}) {
  useEffect(() => {
    getList();
  }, [getList]);
  function getList() {
    dispatch({
      type: 'shopcart/getList',
    });
  }
  function changeNum(_id, n) {
    dispatch({
      type: 'shopcart/changeNum',
      payload: {
        _id,
        n,
      },
    });
  }
  async function del(_id) {
    dispatch({
      type: 'shopcart/del',
      payload: _id,
    });
  }
  return (
    <div className={styles.box}>
      <table>
        <thead>
          <tr>
            <th>商品名</th>
            <th>单价</th>
            <th>数量</th>
            <th>小计</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => changeNum(item._id, -1)}>-</button>
                  {item.num}
                  <button onClick={() => changeNum(item._id, 1)}>+</button>
                </td>
                <td>{item.num * item.price}</td>
                <td>
                  <button onClick={() => del(item._id)}>删除</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    list: state.shopcart.list,
  };
};
export default connect(mapStateToProps)(Shopcart);
