import Redirect from 'umi/redirect';
export default function(props) {
  return (
    <Redirect from='/' to="/home/person" exact />
  );
}
