var possibleStandardNames = {
    // HTML
    accept: 'accept',
    acceptcharset: 'acceptCharset',
    'accept-charset': 'acceptCharset',
    accesskey: 'accessKey',
    action: 'action',
    allowfullscreen: 'allowFullScreen',
    alt: 'alt',
    as: 'as',
    async: 'async',
    autocapitalize: 'autoCapitalize',
    autocomplete: 'autoComplete',
    autocorrect: 'autoCorrect',
    autofocus: 'autoFocus',
    autoplay: 'autoPlay',
    autosave: 'autoSave',
    capture: 'capture',
    cellpadding: 'cellPadding',
    cellspacing: 'cellSpacing',
    challenge: 'challenge',
    charset: 'charSet',
    checked: 'checked',
    children: 'children',
    cite: 'cite',
    class: 'className',
    classid: 'classID',
    classname: 'className',
    cols: 'cols',
    colspan: 'colSpan',
    content: 'content',
    contenteditable: 'contentEditable',
    contextmenu: 'contextMenu',
    controls: 'controls',
    controlslist: 'controlsList',
    coords: 'coords',
    crossorigin: 'crossOrigin',
    dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
    data: 'data',
    datetime: 'dateTime',
    default: 'default',
    defaultchecked: 'defaultChecked',
    defaultvalue: 'defaultValue',
    defer: 'defer',
    dir: 'dir',
    disabled: 'disabled',
    download: 'download',
    draggable: 'draggable',
    enctype: 'encType',
    for: 'htmlFor',
    form: 'form',
    formmethod: 'formMethod',
    formaction: 'formAction',
    formenctype: 'formEncType',
    formnovalidate: 'formNoValidate',
    formtarget: 'formTarget',
    frameborder: 'frameBorder',
    headers: 'headers',
    height: 'height',
    hidden: 'hidden',
    high: 'high',
    href: 'href',
    hreflang: 'hrefLang',
    htmlfor: 'htmlFor',
    httpequiv: 'httpEquiv',
    'http-equiv': 'httpEquiv',
    icon: 'icon',
    id: 'id',
    innerhtml: 'innerHTML',
    inputmode: 'inputMode',
    integrity: 'integrity',
    is: 'is',
    itemid: 'itemID',
    itemprop: 'itemProp',
    itemref: 'itemRef',
    itemscope: 'itemScope',
    itemtype: 'itemType',
    keyparams: 'keyParams',
    keytype: 'keyType',
    kind: 'kind',
    label: 'label',
    lang: 'lang',
    list: 'list',
    loop: 'loop',
    low: 'low',
    manifest: 'manifest',
    marginwidth: 'marginWidth',
    marginheight: 'marginHeight',
    max: 'max',
    maxlength: 'maxLength',
    media: 'media',
    mediagroup: 'mediaGroup',
    method: 'method',
    min: 'min',
    minlength: 'minLength',
    multiple: 'multiple',
    muted: 'muted',
    name: 'name',
    nomodule: 'noModule',
    nonce: 'nonce',
    novalidate: 'noValidate',
    open: 'open',
    optimum: 'optimum',
    pattern: 'pattern',
    placeholder: 'placeholder',
    playsinline: 'playsInline',
    poster: 'poster',
    preload: 'preload',
    profile: 'profile',
    radiogroup: 'radioGroup',
    readonly: 'readOnly',
    referrerpolicy: 'referrerPolicy',
    rel: 'rel',
    required: 'required',
    reversed: 'reversed',
    role: 'role',
    rows: 'rows',
    rowspan: 'rowSpan',
    sandbox: 'sandbox',
    scope: 'scope',
    scoped: 'scoped',
    scrolling: 'scrolling',
    seamless: 'seamless',
    selected: 'selected',
    shape: 'shape',
    size: 'size',
    sizes: 'sizes',
    span: 'span',
    spellcheck: 'spellCheck',
    src: 'src',
    srcdoc: 'srcDoc',
    srclang: 'srcLang',
    srcset: 'srcSet',
    start: 'start',
    step: 'step',
    style: 'style',
    summary: 'summary',
    tabindex: 'tabIndex',
    target: 'target',
    title: 'title',
    type: 'type',
    usemap: 'useMap',
    value: 'value',
    width: 'width',
    wmode: 'wmode',
    wrap: 'wrap',

    // SVG
    about: 'about',
    accentheight: 'accentHeight',
    'accent-height': 'accentHeight',
    accumulate: 'accumulate',
    additive: 'additive',
    alignmentbaseline: 'alignmentBaseline',
    'alignment-baseline': 'alignmentBaseline',
    allowreorder: 'allowReorder',
    alphabetic: 'alphabetic',
    amplitude: 'amplitude',
    arabicform: 'arabicForm',
    'arabic-form': 'arabicForm',
    ascent: 'ascent',
    attributename: 'attributeName',
    attributetype: 'attributeType',
    autoreverse: 'autoReverse',
    azimuth: 'azimuth',
    basefrequency: 'baseFrequency',
    baselineshift: 'baselineShift',
    'baseline-shift': 'baselineShift',
    baseprofile: 'baseProfile',
    bbox: 'bbox',
    begin: 'begin',
    bias: 'bias',
    by: 'by',
    calcmode: 'calcMode',
    capheight: 'capHeight',
    'cap-height': 'capHeight',
    clip: 'clip',
    clippath: 'clipPath',
    'clip-path': 'clipPath',
    clippathunits: 'clipPathUnits',
    cliprule: 'clipRule',
    'clip-rule': 'clipRule',
    color: 'color',
    colorinterpolation: 'colorInterpolation',
    'color-interpolation': 'colorInterpolation',
    colorinterpolationfilters: 'colorInterpolationFilters',
    'color-interpolation-filters': 'colorInterpolationFilters',
    colorprofile: 'colorProfile',
    'color-profile': 'colorProfile',
    colorrendering: 'colorRendering',
    'color-rendering': 'colorRendering',
    contentscripttype: 'contentScriptType',
    contentstyletype: 'contentStyleType',
    cursor: 'cursor',
    cx: 'cx',
    cy: 'cy',
    d: 'd',
    datatype: 'datatype',
    decelerate: 'decelerate',
    descent: 'descent',
    diffuseconstant: 'diffuseConstant',
    direction: 'direction',
    display: 'display',
    divisor: 'divisor',
    dominantbaseline: 'dominantBaseline',
    'dominant-baseline': 'dominantBaseline',
    dur: 'dur',
    dx: 'dx',
    dy: 'dy',
    edgemode: 'edgeMode',
    elevation: 'elevation',
    enablebackground: 'enableBackground',
    'enable-background': 'enableBackground',
    end: 'end',
    exponent: 'exponent',
    externalresourcesrequired: 'externalResourcesRequired',
    fill: 'fill',
    fillopacity: 'fillOpacity',
    'fill-opacity': 'fillOpacity',
    fillrule: 'fillRule',
    'fill-rule': 'fillRule',
    filter: 'filter',
    filterres: 'filterRes',
    filterunits: 'filterUnits',
    floodopacity: 'floodOpacity',
    'flood-opacity': 'floodOpacity',
    floodcolor: 'floodColor',
    'flood-color': 'floodColor',
    focusable: 'focusable',
    fontfamily: 'fontFamily',
    'font-family': 'fontFamily',
    fontsize: 'fontSize',
    'font-size': 'fontSize',
    fontsizeadjust: 'fontSizeAdjust',
    'font-size-adjust': 'fontSizeAdjust',
    fontstretch: 'fontStretch',
    'font-stretch': 'fontStretch',
    fontstyle: 'fontStyle',
    'font-style': 'fontStyle',
    fontvariant: 'fontVariant',
    'font-variant': 'fontVariant',
    fontweight: 'fontWeight',
    'font-weight': 'fontWeight',
    format: 'format',
    from: 'from',
    fx: 'fx',
    fy: 'fy',
    g1: 'g1',
    g2: 'g2',
    glyphname: 'glyphName',
    'glyph-name': 'glyphName',
    glyphorientationhorizontal: 'glyphOrientationHorizontal',
    'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
    glyphorientationvertical: 'glyphOrientationVertical',
    'glyph-orientation-vertical': 'glyphOrientationVertical',
    glyphref: 'glyphRef',
    gradienttransform: 'gradientTransform',
    gradientunits: 'gradientUnits',
    hanging: 'hanging',
    horizadvx: 'horizAdvX',
    'horiz-adv-x': 'horizAdvX',
    horizoriginx: 'horizOriginX',
    'horiz-origin-x': 'horizOriginX',
    ideographic: 'ideographic',
    imagerendering: 'imageRendering',
    'image-rendering': 'imageRendering',
    in2: 'in2',
    in: 'in',
    inlist: 'inlist',
    intercept: 'intercept',
    k1: 'k1',
    k2: 'k2',
    k3: 'k3',
    k4: 'k4',
    k: 'k',
    kernelmatrix: 'kernelMatrix',
    kernelunitlength: 'kernelUnitLength',
    kerning: 'kerning',
    keypoints: 'keyPoints',
    keysplines: 'keySplines',
    keytimes: 'keyTimes',
    lengthadjust: 'lengthAdjust',
    letterspacing: 'letterSpacing',
    'letter-spacing': 'letterSpacing',
    lightingcolor: 'lightingColor',
    'lighting-color': 'lightingColor',
    limitingconeangle: 'limitingConeAngle',
    local: 'local',
    markerend: 'markerEnd',
    'marker-end': 'markerEnd',
    markerheight: 'markerHeight',
    markermid: 'markerMid',
    'marker-mid': 'markerMid',
    markerstart: 'markerStart',
    'marker-start': 'markerStart',
    markerunits: 'markerUnits',
    markerwidth: 'markerWidth',
    mask: 'mask',
    maskcontentunits: 'maskContentUnits',
    maskunits: 'maskUnits',
    mathematical: 'mathematical',
    mode: 'mode',
    numoctaves: 'numOctaves',
    offset: 'offset',
    opacity: 'opacity',
    operator: 'operator',
    order: 'order',
    orient: 'orient',
    orientation: 'orientation',
    origin: 'origin',
    overflow: 'overflow',
    overlineposition: 'overlinePosition',
    'overline-position': 'overlinePosition',
    overlinethickness: 'overlineThickness',
    'overline-thickness': 'overlineThickness',
    paintorder: 'paintOrder',
    'paint-order': 'paintOrder',
    panose1: 'panose1',
    'panose-1': 'panose1',
    pathlength: 'pathLength',
    patterncontentunits: 'patternContentUnits',
    patterntransform: 'patternTransform',
    patternunits: 'patternUnits',
    pointerevents: 'pointerEvents',
    'pointer-events': 'pointerEvents',
    points: 'points',
    pointsatx: 'pointsAtX',
    pointsaty: 'pointsAtY',
    pointsatz: 'pointsAtZ',
    prefix: 'prefix',
    preservealpha: 'preserveAlpha',
    preserveaspectratio: 'preserveAspectRatio',
    primitiveunits: 'primitiveUnits',
    property: 'property',
    r: 'r',
    radius: 'radius',
    refx: 'refX',
    refy: 'refY',
    renderingintent: 'renderingIntent',
    'rendering-intent': 'renderingIntent',
    repeatcount: 'repeatCount',
    repeatdur: 'repeatDur',
    requiredextensions: 'requiredExtensions',
    requiredfeatures: 'requiredFeatures',
    resource: 'resource',
    restart: 'restart',
    result: 'result',
    results: 'results',
    rotate: 'rotate',
    rx: 'rx',
    ry: 'ry',
    scale: 'scale',
    security: 'security',
    seed: 'seed',
    shaperendering: 'shapeRendering',
    'shape-rendering': 'shapeRendering',
    slope: 'slope',
    spacing: 'spacing',
    specularconstant: 'specularConstant',
    specularexponent: 'specularExponent',
    speed: 'speed',
    spreadmethod: 'spreadMethod',
    startoffset: 'startOffset',
    stddeviation: 'stdDeviation',
    stemh: 'stemh',
    stemv: 'stemv',
    stitchtiles: 'stitchTiles',
    stopcolor: 'stopColor',
    'stop-color': 'stopColor',
    stopopacity: 'stopOpacity',
    'stop-opacity': 'stopOpacity',
    strikethroughposition: 'strikethroughPosition',
    'strikethrough-position': 'strikethroughPosition',
    strikethroughthickness: 'strikethroughThickness',
    'strikethrough-thickness': 'strikethroughThickness',
    string: 'string',
    stroke: 'stroke',
    strokedasharray: 'strokeDasharray',
    'stroke-dasharray': 'strokeDasharray',
    strokedashoffset: 'strokeDashoffset',
    'stroke-dashoffset': 'strokeDashoffset',
    strokelinecap: 'strokeLinecap',
    'stroke-linecap': 'strokeLinecap',
    strokelinejoin: 'strokeLinejoin',
    'stroke-linejoin': 'strokeLinejoin',
    strokemiterlimit: 'strokeMiterlimit',
    'stroke-miterlimit': 'strokeMiterlimit',
    strokewidth: 'strokeWidth',
    'stroke-width': 'strokeWidth',
    strokeopacity: 'strokeOpacity',
    'stroke-opacity': 'strokeOpacity',
    suppresscontenteditablewarning: 'suppressContentEditableWarning',
    suppresshydrationwarning: 'suppressHydrationWarning',
    surfacescale: 'surfaceScale',
    systemlanguage: 'systemLanguage',
    tablevalues: 'tableValues',
    targetx: 'targetX',
    targety: 'targetY',
    textanchor: 'textAnchor',
    'text-anchor': 'textAnchor',
    textdecoration: 'textDecoration',
    'text-decoration': 'textDecoration',
    textlength: 'textLength',
    textrendering: 'textRendering',
    'text-rendering': 'textRendering',
    to: 'to',
    transform: 'transform',
    typeof: 'typeof',
    u1: 'u1',
    u2: 'u2',
    underlineposition: 'underlinePosition',
    'underline-position': 'underlinePosition',
    underlinethickness: 'underlineThickness',
    'underline-thickness': 'underlineThickness',
    unicode: 'unicode',
    unicodebidi: 'unicodeBidi',
    'unicode-bidi': 'unicodeBidi',
    unicoderange: 'unicodeRange',
    'unicode-range': 'unicodeRange',
    unitsperem: 'unitsPerEm',
    'units-per-em': 'unitsPerEm',
    unselectable: 'unselectable',
    valphabetic: 'vAlphabetic',
    'v-alphabetic': 'vAlphabetic',
    values: 'values',
    vectoreffect: 'vectorEffect',
    'vector-effect': 'vectorEffect',
    version: 'version',
    vertadvy: 'vertAdvY',
    'vert-adv-y': 'vertAdvY',
    vertoriginx: 'vertOriginX',
    'vert-origin-x': 'vertOriginX',
    vertoriginy: 'vertOriginY',
    'vert-origin-y': 'vertOriginY',
    vhanging: 'vHanging',
    'v-hanging': 'vHanging',
    videographic: 'vIdeographic',
    'v-ideographic': 'vIdeographic',
    viewbox: 'viewBox',
    viewtarget: 'viewTarget',
    visibility: 'visibility',
    vmathematical: 'vMathematical',
    'v-mathematical': 'vMathematical',
    vocab: 'vocab',
    widths: 'widths',
    wordspacing: 'wordSpacing',
    'word-spacing': 'wordSpacing',
    writingmode: 'writingMode',
    'writing-mode': 'writingMode',
    x1: 'x1',
    x2: 'x2',
    x: 'x',
    xchannelselector: 'xChannelSelector',
    xheight: 'xHeight',
    'x-height': 'xHeight',
    xlinkactuate: 'xlinkActuate',
    'xlink:actuate': 'xlinkActuate',
    xlinkarcrole: 'xlinkArcrole',
    'xlink:arcrole': 'xlinkArcrole',
    xlinkhref: 'xlinkHref',
    'xlink:href': 'xlinkHref',
    xlinkrole: 'xlinkRole',
    'xlink:role': 'xlinkRole',
    xlinkshow: 'xlinkShow',
    'xlink:show': 'xlinkShow',
    xlinktitle: 'xlinkTitle',
    'xlink:title': 'xlinkTitle',
    xlinktype: 'xlinkType',
    'xlink:type': 'xlinkType',
    xmlbase: 'xmlBase',
    'xml:base': 'xmlBase',
    xmllang: 'xmlLang',
    'xml:lang': 'xmlLang',
    xmlns: 'xmlns',
    'xml:space': 'xmlSpace',
    xmlnsxlink: 'xmlnsXlink',
    'xmlns:xlink': 'xmlnsXlink',
    xmlspace: 'xmlSpace',
    y1: 'y1',
    y2: 'y2',
    y: 'y',
    ychannelselector: 'yChannelSelector',
    z: 'z',
    zoomandpan: 'zoomAndPan',
    onabort: 'onAbort',
    onafterchange: 'onAfterChange',
    onaftercheck: 'onAfterCheck',
    onafterclose: 'onAfterClose',
    onafterexpand: 'onAfterExpand',
    onafterload: 'onAfterLoad',
    onafterprint: 'onAfterPrint',
    onafterprocess: 'onAfterProcess',
    onafterremove: 'onAfterRemove',
    onafterrender: 'onAfterRender',
    onafterselect: 'onAfterSelect',
    onaftersubmit: 'onAfterSubmit',
    onafterupdate: 'onAfterUpdate',
    onbeforecancel: 'onBeforeCancel',
    onbeforecellsave: 'onBeforeCellSave',
    onbeforecelledit: 'onBeforeCellEdit',
    onbeforecellreset: 'onBeforeCellReset',
    onbeforechange: 'onBeforeChange',
    onbeforecheck: 'onBeforeCheck',
    onbeforeclear: 'onBeforeClear',
    onbeforecollapse: 'onBeforeCollapse',
    onbeforeedit: 'onBeforeEdit',
    onbeforeexpand: 'onBeforeExpand',
    onbeforeload: 'onBeforeLoad',
    onbeforeprint: 'onBeforePrint',
    onbeforeprocess: 'onBeforeProcess',
    onbeforereset: 'onBeforeReset',
    onbeforeremove: 'onBeforeRemove',
    onbeforerowadd: 'onBeforeRowAdd',
    onbeforerowdown: 'onBeforeRowDown',
    onbeforerowedit: 'onBeforeRowEdit',
    onbeforerowdelete: 'onBeforeRowDelete',
    onbeforerowreset: 'onBeforeRowReset',
    onbeforerowsave: 'onBeforeRowSave',
    onbeforerowup: 'onBeforeRowUp',
    onbeforesave: 'onBeforeSave',
    onbeforeselect: 'onBeforeSelect',
    onbeforesubmit: 'onBeforeSubmit',
    onbeforeunload: 'onBeforeUnload',
    onbeforeupload: 'onBeforeUpload',
    onblur: 'onBlur',
    oncancel: 'onCancel',
    oncanplay: 'onCanPlay',
    oncanplaythrough: 'onCanplayThrough',
    oncellsave: 'onCellSave',
    onchange: 'onChange',
    oncheck: 'onCheck',
    onclear: 'onClear',
    onclick: 'onClick',
    onclickbutton: 'onClickButton',
    onclickicon: 'onClickIcon',
    onclose: 'onClose',
    oncollapse: 'onCollapse',
    oncompassneedscalibration: 'onCompassNeedScalibration',
    oncomplete: 'onComplete',
    onconfirm: 'onConfirm',
    oncontextmenu: 'onContextMenu',
    oncustomrequest: 'onCustomRequest',
    ondatecellrender: 'onDateCellRender',
    ondblclick: 'onDblClick',
    ondeselect: 'onDeSelect',
    ondevicelight: 'onDeviceLight',
    ondevicemotion: 'onDeviceMotion',
    ondeviceorientation: 'onDeviceOrientation',
    ondisableddate: 'onDisabledDate',
    ondovalidate: 'onDoValidate',
    ondrag: 'onDrag',
    ondragend: 'onDragEnd',
    ondragenter: 'onDragEnter',
    ondragleave: 'onDragLeave',
    ondragover: 'onDragOver',
    ondragstart: 'onDragStart',
    ondrop: 'onDrop',
    ondurationchange: 'onDurationChange',
    onedit: 'onEdit',
    onemptied: 'onEmptied',
    onended: 'onEnded',
    onerror: 'onError',
    onexpand: 'onExpand',
    onexpanded: 'onExpanded',
    onexpandedrow: 'onExpandedRow',
    onexpandedrowschange: 'onExpandedRowsChange',
    onfailed: 'onFailed',
    onfocus: 'onFocus',
    onformatter: 'onFormatter',
    onhashchange: 'onHashChange',
    onhidepanel: 'onHidePanel',
    oninput: 'onInput',
    oninvalid: 'onInvalid',
    onitemrender: 'onItemRender',
    onkeydown: 'onKeyDown',
    onkeypress: 'onKeyPress',
    onkeyup: 'onKeyUp',
    onlefttreecheck: 'onLeftTreeCheck',
    onlefttreemoved: 'onLeftTreeMoved',
    onload: 'onLoad',
    onloadeddata: 'onLoadedData',
    onloadedmetadata: 'onLoadedMetaData',
    onloadfailed: 'onLoadFailed',
    onloadstart: 'onLoadStart',
    onloadsuccess: 'onLoadSuccess',
    onloaderror: 'onLoadError',
    onlogout: 'onLogout',
    onmatchformat: 'onMatchFormat',
    onmessage: 'onMessage',
    onmousedown: 'onMouseDown',
    onmouseenter: 'onMouseEnter',
    onmouseleave: 'onMouseLeave',
    onmousemove: 'onMouseMove',
    onmouseout: 'onMouseOut',
    onmouseover: 'onMouseOver',
    onmouseup: 'onMouseUp',
    onmousewheel: 'onMouseWheel',
    onmsgesturechange: 'onMsGestureChange',
    onmsgesturedoubletap: 'onMsGestureDoubleTap',
    onmsgestureend: 'onMsGestureEnd',
    onmsgesturehold: 'onMsGestureHold',
    onmsgesturestart: 'onMsGestureStart',
    onmsgesturetap: 'onMsGestureTap',
    onmsinertiastart: 'onMsInertiaStart',
    onmspointercancel: 'onMsPointerCancel',
    onmspointerdown: 'onMsPointerDown',
    onmspointerenter: 'onMsPointerEnter',
    onmspointerleave: 'onMsPointerLeave',
    onmspointermove: 'onMsPointerMove',
    onmspointerout: 'onMsPointerOut',
    onmspointerover: 'onMsPointerOver',
    onmspointerup: 'onMsPointerUp',
    onnotification: 'onNotification',
    onoffline: 'onOffLine',
    onok: 'onOk',
    ononline: 'onOnline',
    onopen: 'onOpen',
    onopenchange: 'onOpenChange',
    onorientationchange: 'onOrientationChange',
    onpagehide: 'onPageHide',
    onpageshow: 'onPageShow',
    onpagesizechange: 'onPageSizeChange',
    onpanelchange: 'onPanelChange',
    onparser: 'onParser',
    onpause: 'onPause',
    onplay: 'onPlay',
    onplaying: 'onPlaying',
    onpopstate: 'onPopState',
    onpressenter: 'onPressEnter',
    onpreview: 'onPreview',
    onprocess: 'onProcess',
    onprogress: 'onProgress',
    onratechange: 'onRateChange',
    onreadystatechange: 'onReadyStateChange',
    onremove: 'onRemove',
    onrender: 'onRender',
    onreset: 'onReset',
    onresize: 'onResize',
    onrightclick: 'onRightClick',
    onrighttreemoved: 'onRightTreeMoved',
    onrighttreecheck: 'onRightTreeCheck',
    onrowclick: 'onRowClick',
    onrowdelete: 'onRowDelete',
    onrowsave: 'onRowSave',
    onsave: 'onSave',
    onscroll: 'onScroll',
    onsearch: 'onSearch',
    onsearchchange: 'onSearchChange',
    onseeked: 'onSeeked',
    onseeking: 'onSeeking',
    onselect: 'onSelect',
    onselectall: 'onSelectAll',
    onselectchange: 'onSelectChange',
    onshowpanel: 'onShowPanel',
    onshowsizechange: 'onShowSizeChange',
    onstalled: 'onStalled',
    onstorage: 'onStorage',
    onsubmit: 'onSubmit',
    onsubmitfailed: 'onSubmitFailed',
    onsubmitsuccess: 'onSubmitSuccess',
    onsuccess: 'onSuccess',
    onsuspend: 'onSuspend',
    ontabchange: 'onTabChange',
    ontimeupdate: 'onTimeUpdate',
    ontitleclick: 'onTitleClick',
    ontouchcancel: 'onTouchCancel',
    ontouchend: 'onTouchEnd',
    ontouchmove: 'onTouchMove',
    ontouchstart: 'onTouchStart',
    onunload: 'onUnload',
    onunselect: 'onUnselect',
    onvalidate: 'onValidate',
    onvolumechange: 'onVolumeChange',
    onwaiting: 'onWaiting',
    onwarn: 'onWarn',

};
//存储自定义组件的props名称
var possibleStandardTagNames = {};
window.possibleStandardTagNames = possibleStandardTagNames;
window.getPossibleStandardTagName = function(propName: string) {
  
    var lowerCasedName = propName.toLowerCase();
    // let possibleRegistrationNames = ReactDOM["__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"].EventPluginRegistry.possibleRegistrationNames;
    // if (!possibleStandardNames.hasOwnProperty(lowerCasedName) && !possibleRegistrationNames[lowerCasedName]) {
    //     return propName;
    // }
    return possibleStandardTagNames[lowerCasedName] || propName;
}
var possibleStandardTypes = {};
window.possibleStandardTypes = possibleStandardTypes;
window.getPossibleStandardType = function(propName: string) {
    return possibleStandardTypes[propName.toLowerCase()] || "any";
}
window.possibleStandardNames = possibleStandardNames;
window.getPossibleStandardName = function(propName: string) {
  
    var lowerCasedName = propName.toLowerCase();
    // let possibleRegistrationNames = ReactDOM["__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"].EventPluginRegistry.possibleRegistrationNames;
    // if (!possibleStandardNames.hasOwnProperty(lowerCasedName) && !possibleRegistrationNames[lowerCasedName]) {
    //     return propName;
    // }
    return possibleStandardNames[lowerCasedName] || propName;
}