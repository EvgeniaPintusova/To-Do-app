import userIcon from '../../../img/user-image.png';
import styles from './user.module.css'
import Button from '../../button'

export default function User({ userName}) {
  return (
    <div className={styles.user}>
        <p>{userName}</p>
        <img src={userIcon} className={styles.userIcon}/>
        <Button icon='down'/>
    </div>
  );
}
