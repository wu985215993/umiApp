import styles from './index.css';
import NavLink from 'umi/navlink';
export default function(props) {
  return (
    <div className={styles.box}>
      <div className={styles.leftBox}>
        <div>
          <NavLink to="/home/person" activeStyle={{ color: 'red' }}>
            人员管理
          </NavLink>
        </div>
        <div>
          <NavLink to="/home/goods" activeStyle={{ color: 'red' }}>
            商品管理
          </NavLink>
        </div>
        <div>
          <NavLink to="/home/shopcart" activeStyle={{ color: 'red' }}>
            购物车
          </NavLink>
        </div>
        <div>
          <NavLink to="/home/todolist" activeStyle={{ color: 'red' }}>
            任务列表
          </NavLink>
        </div>
      </div>
      <div className={styles.rightBox}>
        {/* 路由出口 */}
        {props.children}
      </div>
    </div>
  );
}
