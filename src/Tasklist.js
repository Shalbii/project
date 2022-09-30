import Topbar from './TasklistPages/Topbar';
import LeftBar from './TasklistPages/LeftBar';
import Filterbar from './TasklistPages/Filterbar';
import Mainlist from './TasklistPages/Mainlist';
import Titlebar from './TasklistPages/Titlebar';
import Form from './TasklistPages/Form';
import React from "react";
import './TLP.css';

export default function Tasklist() {
    return (
        <>
            <div className='TasklistP'>
                <div className='TasklistP_content'>
                    <div className='TasklistP_content_topbar'><Topbar /></div>

                    <div className='TasklistP_contentL'>
                        <div className='TasklistP_content_leftbar'><LeftBar /></div>
                        <div className='TasklistP_contentR'>
                            <div className='TasklistP_content_titlebar'><Titlebar /></div>
                            <div className='TasklistP_content_filterbar'><Filterbar /></div>
                            <div className='TasklistP_content_mainlist'><Mainlist /></div>

                            {/* <div className='TasklistP_content_form'><Form /> */}
                        </div>

                    </div>
                </div>
                {/* </div> */}
            </div>

        </>
    );
}


{/* <div> page</div>
    <div>Topbar</div>
    <div>other</div>
        <div>otherlrft</div>
            <div>leftbar</div>
        <div>otherright</div>
            <div>tsklist</div>
            <div>filt</div>
            <div>list</div> */}