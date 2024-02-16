import { connect } from "react-redux";

import {Variants, motion} from 'framer-motion'


function Layout({children}: any){
    return(
        <motion.div
        initial={{opacity: 0, }}
        variants={ { transition: {duration: 0.5}   } as Variants}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: 0.5}}}
        >
            
            {children}
        </motion.div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        // user: state.user,
    };
};

export default connect(mapStateToProps,{})(Layout);