import {connect} from "react-redux"
import {addData} from '../../actions/auth'

const submitHandler = (event, data, props) => {
    event.preventDefault();
    props.authenticateUser(data)
    console.log(data)
  };

function mapStateToProps(state) {
return {
    user: state.user,
};
}

const mapDispatchToProps = {
    addData
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(submitHandler);