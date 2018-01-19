<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# React Component Reference

- [Footer](#footer)
- [Timeline](#timeline)
- [Sidebar/WorkspaceListItem](#sidebarworkspacelistitem)
- [Login/LoginBtnForgotPw](#loginloginbtnforgotpw)
- [Login/LoginLogo](#loginloginlogo)
- [Header/Logo](#headerlogo)
- [Header/MenuLinkList](#headermenulinklist)
- [Header/NavbarToggler](#headernavbartoggler)
- [Workspace/FileContentViewer](#workspacefilecontentviewer)
- [Workspace/FileItem](#workspacefileitem)
- [Workspace/FileItemHeader](#workspacefileitemheader)
- [Workspace/Folder](#workspacefolder)
- [Header/MenuActionListItem/DropdownLang](#headermenuactionlistitemdropdownlang)
- [Header/MenuActionListItem/Help](#headermenuactionlistitemhelp)
- [Header/MenuActionListItem/MenuProfil](#headermenuactionlistitemmenuprofil)
- [Header/MenuActionListItem/Search](#headermenuactionlistitemsearch)
- [common/Input/Button](#commoninputbutton)
- [common/Input/DropdownCreateButton](#commoninputdropdowncreatebutton)
- [common/Input/InputCheckbox](#commoninputinputcheckbox)
- [common/Input/InputGroupText](#commoninputinputgrouptext)
- [common/Card/Card](#commoncardcard)
- [common/Card/CardBody](#commoncardcardbody)
- [common/Card/CardHeader](#commoncardcardheader)
- [common/PopinFixed/PopinFixed](#commonpopinfixedpopinfixed)
- [common/PopinFixed/PopinFixedContent](#commonpopinfixedpopinfixedcontent)
- [common/PopinFixed/PopinFixedHeader](#commonpopinfixedpopinfixedheader)
- [common/PopinFixed/PopinFixedOption](#commonpopinfixedpopinfixedoption)
- [common/layout/PageContent](#commonlayoutpagecontent)
- [common/layout/PageTitle](#commonlayoutpagetitle)
- [common/layout/PageWrapper](#commonlayoutpagewrapper)
- [Workspace/FileType/PageHtml](#workspacefiletypepagehtml)
- [Workspace/FileType/Thread](#workspacefiletypethread)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Footer

From [`../../src/component/Footer.jsx`](../../src/component/Footer.jsx)

<br><br>

## Timeline

From [`../../src/component/Timeline.jsx`](../../src/component/Timeline.jsx)

<br><br>

## Sidebar/WorkspaceListItem

From [`../../src/component/Sidebar/WorkspaceListItem.jsx`](../../src/component/Sidebar/WorkspaceListItem.jsx)

#### isOpen

```js
// Default: false
isOpen: Boolean
```

#### name

```js
// Required
name: String
```

#### number

```js
// Required
number: Number
```

#### onClickTitle

```js
// Default: () => {}
onClickTitle: Function
```

<br><br>

## Login/LoginBtnForgotPw

From [`../../src/component/Login/LoginBtnForgotPw.jsx`](../../src/component/Login/LoginBtnForgotPw.jsx)

#### customClass

```js
// Default: ''
customClass: String
```

#### label

```js
// Default: ''
label: String
```

<br><br>

## Login/LoginLogo

From [`../../src/component/Login/LoginLogo.jsx`](../../src/component/Login/LoginLogo.jsx)

#### customClass

```js
// Default: ''
customClass: String
```

#### logoSrc

```js
// Required
logoSrc: String
```

<br><br>

## Header/Logo

From [`../../src/component/Header/Logo.jsx`](../../src/component/Header/Logo.jsx)

<br><br>

## Header/MenuLinkList

From [`../../src/component/Header/MenuLinkList.jsx`](../../src/component/Header/MenuLinkList.jsx)

<br><br>

## Header/NavbarToggler

From [`../../src/component/Header/NavbarToggler.jsx`](../../src/component/Header/NavbarToggler.jsx)

<br><br>

## Workspace/FileContentViewer

From [`../../src/component/Workspace/FileContentViewer.jsx`](../../src/component/Workspace/FileContentViewer.jsx)

<br><br>

## Workspace/FileItem

From [`../../src/component/Workspace/FileItem.jsx`](../../src/component/Workspace/FileItem.jsx)

#### customClass

```js
// Default: ''
customClass: String
```

#### name

```js
// Default: ''
name: String
```

#### onClickItem

```js
// Default: () => {}
onClickItem: Function
```

#### status

```js
// Required
status: String
```

#### type

```js
// Required
type: String
```

<br><br>

## Workspace/FileItemHeader

From [`../../src/component/Workspace/FileItemHeader.jsx`](../../src/component/Workspace/FileItemHeader.jsx)

<br><br>

## Workspace/Folder

From [`../../src/component/Workspace/Folder.jsx`](../../src/component/Workspace/Folder.jsx)

#### folderData

```js
folderData: {
    title: String
    content: Array
}
```

<br><br>

## Header/MenuActionListItem/DropdownLang

From [`../../src/component/Header/MenuActionListItem/DropdownLang.jsx`](../../src/component/Header/MenuActionListItem/DropdownLang.jsx)

<br><br>

## Header/MenuActionListItem/Help

From [`../../src/component/Header/MenuActionListItem/Help.jsx`](../../src/component/Header/MenuActionListItem/Help.jsx)

<br><br>

## Header/MenuActionListItem/MenuProfil

From [`../../src/component/Header/MenuActionListItem/MenuProfil.jsx`](../../src/component/Header/MenuActionListItem/MenuProfil.jsx)

<br><br>

## Header/MenuActionListItem/Search

From [`../../src/component/Header/MenuActionListItem/Search.jsx`](../../src/component/Header/MenuActionListItem/Search.jsx)

<br><br>

## common/Input/Button

From [`../../src/component/common/Input/Button.jsx`](../../src/component/common/Input/Button.jsx)

#### customClass

```js
// Default: ''
customClass: 
```

#### label

```js
// Default: ''
label: 
```

#### onClick

```js
// Default: () => {}
onClick: 
```

<br><br>

## common/Input/DropdownCreateButton

From [`../../src/component/common/Input/DropdownCreateButton.jsx`](../../src/component/common/Input/DropdownCreateButton.jsx)

#### customClass

```js
// Default: ''
customClass: String
```

#### parentClass

```js
// Default: ''
parentClass: String
```

<br><br>

## common/Input/InputCheckbox

From [`../../src/component/common/Input/InputCheckbox.jsx`](../../src/component/common/Input/InputCheckbox.jsx)

#### customClass

```js
// Default: ''
customClass: 
```

#### label

```js
// Default: ''
label: 
```

<br><br>

## common/Input/InputGroupText

From [`../../src/component/common/Input/InputGroupText.jsx`](../../src/component/common/Input/InputGroupText.jsx)

#### customClass

```js
// Default: ''
customClass: 
```

#### icon

```js
// Default: false
icon: 
```

#### invalidMsg

```js
// Default: false
invalidMsg: 
```

#### onChange

```js
// Default: () => {}
onChange: 
```

#### placeHolder

```js
// Default: ''
placeHolder: 
```

<br><br>

## common/Card/Card

From [`../../src/component/common/Card/Card.jsx`](../../src/component/common/Card/Card.jsx)

#### children

```js
// Required
children: [(children, key, componentName /* , location, propFullName */) &#x3D;&gt; {
  if (
    children.length &gt; 2 ||
    children[0].type !&#x3D;&#x3D; CardHeader ||
    children[1].type !&#x3D;&#x3D; CardBody
    // children.some(p &#x3D;&gt; p.type !&#x3D;&#x3D; CardHeader &amp;&amp; p.type !&#x3D;&#x3D; CardBody)
  ) {
    return new Error(&#x60;PropType Error: childrens of ${componentName} must be: 1 CardHeader and 1 CardBody.&#x60;)
  }
} (custom validator), ...]
```

#### customClass

```js
// Default: ''
customClass: String
```

<br><br>

## common/Card/CardBody

From [`../../src/component/common/Card/CardBody.jsx`](../../src/component/common/Card/CardBody.jsx)

#### formClass

```js
// Default: ''
formClass: 
```

<br><br>

## common/Card/CardHeader

From [`../../src/component/common/Card/CardHeader.jsx`](../../src/component/common/Card/CardHeader.jsx)

#### customClass

```js
// Default: ''
customClass: 
```

<br><br>

## common/PopinFixed/PopinFixed

From [`../../src/component/common/PopinFixed/PopinFixed.jsx`](../../src/component/common/PopinFixed/PopinFixed.jsx)

#### children

```js
// Required
children: [(children, key, componentName /* , location, propFullName */) &#x3D;&gt; {
  if (
    children.length &gt; 3 ||
    children[0].type !&#x3D;&#x3D; PopinFixedHeader ||
    children[1].type !&#x3D;&#x3D; PopinFixedOption ||
    children[2].type !&#x3D;&#x3D; PopinFixedContent
  ) {
    return new Error(&#x60;PropType Error: childrens of ${componentName} must be: 1 PopinFixedHeader, 1 PopinFixedOption and 1 PopinFixedContent.&#x60;)
  }
} (custom validator), ...]
```

#### customClass

```js
// Default: ''
customClass: String
```

#### visible

```js
// Default: true
visible: Boolean
```

<br><br>

## common/PopinFixed/PopinFixedContent

From [`../../src/component/common/PopinFixed/PopinFixedContent.jsx`](../../src/component/common/PopinFixed/PopinFixedContent.jsx)

#### children

```js
// Required
children: [(children, key, componentName /* , location, propFullName */) &#x3D;&gt; {
  if (
    (Array.isArray(children.length) &amp;&amp; (
      children.length &gt; 2 ||
      (children.length &#x3D;&#x3D;&#x3D; 2 &amp;&amp; children.some(c &#x3D;&gt; ![PageHtml, Thread, Timeline].includes(c.type)))
    )) ||
    (children.type &#x3D;&#x3D;&#x3D; Timeline)
  ) {
    return new Error(&#x60;PropType Error: childrens of ${componentName} must be one of [PageHtml, Thread, Timeline, undefined].&#x60;)
  }
} (custom validator), ...]
```

#### customClass

```js
customClass: String
```

<br><br>

## common/PopinFixed/PopinFixedHeader

From [`../../src/component/common/PopinFixed/PopinFixedHeader.jsx`](../../src/component/common/PopinFixed/PopinFixedHeader.jsx)

#### customClass

```js
// Default: ''
customClass: String
```

#### icon

```js
// Required
icon: String
```

#### name

```js
// Default: ''
name: String
```

#### onClickCloseBtn

```js
// Required
onClickCloseBtn: Function
```

<br><br>

## common/PopinFixed/PopinFixedOption

From [`../../src/component/common/PopinFixed/PopinFixedOption.jsx`](../../src/component/common/PopinFixed/PopinFixedOption.jsx)

<br><br>

## common/layout/PageContent

From [`../../src/component/common/layout/PageContent.jsx`](../../src/component/common/layout/PageContent.jsx)

#### customClass

```js
// Default: ''
customClass: String
```

#### parentClass

```js
// Default: ''
parentClass: String
```

<br><br>

## common/layout/PageTitle

From [`../../src/component/common/layout/PageTitle.jsx`](../../src/component/common/layout/PageTitle.jsx)

#### customClass

```js
// Default: ''
customClass: String
```

#### parentClass

```js
// Default: ''
parentClass: String
```

#### title

```js
// Required
title: String
```

<br><br>

## common/layout/PageWrapper

From [`../../src/component/common/layout/PageWrapper.jsx`](../../src/component/common/layout/PageWrapper.jsx)

#### children

```js
// Required
children: [(children, key, componentName /* , location, propFullName */) &#x3D;&gt; {
  if (
    children.length &gt; 2 ||
    children[0].type !&#x3D;&#x3D; PageTitle ||
    children[1].type !&#x3D;&#x3D; PageContent
    // children.some(p &#x3D;&gt; p.type !&#x3D;&#x3D; CardHeader &amp;&amp; p.type !&#x3D;&#x3D; CardBody)
  ) {
    return new Error(&#x60;PropType Error: childrens of ${componentName} must be: 1 PageTitle and 1 PageContent.&#x60;)
  }
} (custom validator), ...]
```

#### customClass

```js
// Default: ''
customClass: String
```

<br><br>

## Workspace/FileType/PageHtml

From [`../../src/component/Workspace/FileType/PageHtml.jsx`](../../src/component/Workspace/FileType/PageHtml.jsx)

<br><br>

## Workspace/FileType/Thread

From [`../../src/component/Workspace/FileType/Thread.jsx`](../../src/component/Workspace/FileType/Thread.jsx)

<br><br>
