import React from 'react';
import {Link, IndexLink} from 'react-router'
import * as rotateHandleActionsFromOtherFile from '../actions/rotateHandle'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import './style.less'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rotate: false
        }
        this.rotateHandle = this.rotateHandle.bind(this);
    }

    rotateHandle() {
        // this.props.rotateHandleActions({isRotate:true})
        this.props.rotateHandleActions.update({
            isRotate: !this.props.isRotate
        })
    }

    render() {
        return (
            <div>
                <div className="HomeHeader-container">
                    <div className="HomeHeader-content">
                        <ul>
                            <li>
                                <IndexLink to={`/`} activeClassName="active">推荐</IndexLink>
                            </li>
                            <li>
                                <Link to={`/news`} activeClassName="active">新闻</Link>
                            </li>
                            <li>
                                <Link to={`/yule`} activeClassName="active">娱乐</Link>
                            </li>
                            <li>
                                <Link to={`/sports`} activeClassName="active">体育</Link>
                            </li>
                            <li>
                                <Link to={`/toutiao`} activeClassName="active">头条</Link>
                            </li>
                        </ul>
                        <div className={this.props.isRotate
                            ? "HomeHeader-content-right HomeHeader-content-right-extand"
                            : 'HomeHeader-content-right'} onClick={this.rotateHandle}>
                            <i className="iconfont icon-moreunfold"></i>
                        </div>
                    </div>
                    <div className={this.props.isRotate
                        ? "menu-content-show"
                        : 'menu-content'}>
                        <ul>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                            <li>推荐</li>
                        </ul>
                        <ul className="expand_panel_channel">
                            <li className="pannel_item channel_icon_item">
                                <div className="icon_item_img">
                                    <img src="http://cms-bucket.nosdn.127.net/468cc3e8108f46bcac36e412da129c5f20161025190655.png"/></div>
                                <div className="icon_item_text">图片</div>
                            </li>
                            <li className="pannel_item channel_icon_item">
                                <div className="icon_item_img">
                                    <img src="http://cms-bucket.nosdn.127.net/3f1829bdf5484f0dbe1d240bf69b86bf20161025190654.png"/></div>
                                <div className="icon_item_text">星闻</div>
                            </li>
                            <li className="pannel_item channel_icon_item">
                                <div className="icon_item_img">
                                    <img src="http://cms-bucket.nosdn.127.net/cd413076e48142a8af03a4112bd31f6520170703142908.png"/></div>
                                <div className="icon_item_text">薄荷</div>
                            </li>
                            <li className="pannel_item channel_icon_item">
                                <div className="icon_item_img">
                                    <img src="http://img2.cache.netease.com/f2e/wap/touch_index_2016/trunk/images/channel_icon_4.png"/></div>
                                <div className="icon_item_text">公开课</div>
                            </li>
                            <li className="pannel_item channel_icon_item">
                                <div className="icon_item_img">
                                    <img src="http://img2.cache.netease.com/f2e/wap/touch_index_2016/trunk/images/channel_icon_5.png"/></div>
                                <div className="icon_item_text">邮箱</div>
                            </li>
                            <li className="pannel_item channel_icon_item">
                                <div className="icon_item_img">
                                    <img src="http://img2.cache.netease.com/f2e/wap/touch_index_2016/trunk/images/channel_icon_6.png"/></div>
                                <div className="icon_item_text">房产</div>
                            </li>
                            <li className="pannel_item channel_icon_item">
                                <div className="icon_item_img">
                                    <img src="http://img2.cache.netease.com/f2e/wap/touch_index_2016/trunk/images/channel_icon_7.png"/></div>
                                <div className="icon_item_text">家居</div>
                            </li>
                            <li className="pannel_item channel_icon_item">
                                <div className="icon_item_img">
                                    <img src="http://img2.cache.netease.com/f2e/wap/touch_index_2016/trunk/images/channel_icon_8.png"/></div>
                                <div className="icon_item_text">小说</div>
                            </li>
                            <li className="pannel_item channel_icon_item">
                                <div className="icon_item_img">
                                    <img src="http://img2.cache.netease.com/f2e/wap/touch_index_2016/trunk/images/channel_icon_9.png"/></div>
                                <div className="icon_item_text">漫画</div>
                            </li>
                            <li className="pannel_item channel_icon_item">
                                <div className="icon_item_img">
                                    <img src="http://img2.cache.netease.com/f2e/wap/touch_index_2016/trunk/images/channel_icon_2.png"/></div>
                                <div className="icon_item_text">轻松一刻</div>
                            </li>
                        </ul>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {isRotate: state.rotateHandle.isRotate}
}

function mapDispatchToProps(dispatch) {
    return {
        rotateHandleActions: bindActionCreators(rotateHandleActionsFromOtherFile, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
