import {width} from '../../utils';
import Colors from '../../config/Colors';

const styles = {
    container: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        marginTop: 40,
        fontSize: 36,
        fontWeight: '600',
        color: Colors.blue
    },
    logo: {
        width: .4 * width,
        height: .24 * width
    },
    wrapper: {
        marginTop: 40,
        paddingHorizontal: 25,
        width
    },
    description: {
        fontSize: 22
    }
};

export default styles;
