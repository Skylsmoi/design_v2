import React from 'react'
import { connect } from 'react-redux'
import PopinFixed from '../../../component/common/PopinFixed/PopinFixed.jsx'
import PopinFixedHeader from '../../../component/common/PopinFixed/PopinFixedHeader.jsx'
import PopinFixedOption from '../../../component/common/PopinFixed/PopinFixedOption.jsx'
import PopinFixedContent from '../../../component/common/PopinFixed/PopinFixedContent.jsx'
import PageHtmlComponent from './PageHtmlComponent.jsx'
import Timeline from '../../../component/Timeline.jsx'
import { hideActiveFileContent } from '../../../action-creator.sync.js'

require('./PageHtml.styl')

class PageHtmlContainer extends React.Component {
  handleClickBtnClose = () => this.props.dispatch(hideActiveFileContent())

  render () {
    const { activeFileContent, plugin: { PageHtml } } = this.props

    return (
      <PopinFixed customClass={`${PageHtml.customClass}`}>
        <PopinFixedHeader
          customClass={`${PageHtml.customClass}`}
          icon={PageHtml.icon}
          name={activeFileContent.title}
          onClickCloseBtn={this.handleClickBtnClose}
        />

        <PopinFixedOption customClass={`${PageHtml.customClass}`} />

        <PopinFixedContent customClass={`${PageHtml.customClass}__contentpage`}>
          <PageHtmlComponent
            version={activeFileContent.version}
            text={activeFileContent.text}
            key={'PageHtml'}
          />

          <Timeline
            customClass={`${PageHtml.customClass}__contentpage`}
            key={'pageHtml__timeline'}
          />
        </PopinFixedContent>
      </PopinFixed>
    )
  }
}

const mapStateToProps = ({ activeFileContent, plugin }) => ({ activeFileContent, plugin })
export default connect(mapStateToProps)(PageHtmlContainer)