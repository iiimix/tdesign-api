module.exports = {
  BaseTable: {
    allowResizeColumnWidth_2646: { field_name: 'allowResizeColumnWidth', id: 2646 },
    attach_3260: { field_name: 'attach', id: 3260 },
    bordered_325: {
      field_name: 'bordered',
      id: 325,
      PC: { className: 't-table--bordered', wrapper: 'getNormalTableMount' },
    },
    bottomContent_2526: {
      field_name: 'bottomContent',
      id: 2526,
      PC: { tnode: true, wrapper: 'getNormalTableMount' },
    },
    cellEmptyContent_2911: {
      field_name: 'cellEmptyContent',
      id: 2911,
      PC: { tnode: true, wrapper: 'getNormalTableMount' },
    },
    columns_320: { field_name: 'columns', id: 320 },
    data_319: { field_name: 'data', id: 319 },
    disableDataPage_2081: { field_name: 'disableDataPage', id: 2081 },
    empty_328: {
      field_name: 'empty',
      id: 328,
      PC: { tnode: true, wrapper: 'getEmptyDataTableMount' },
    },
    firstFullRow_2054: {
      field_name: 'firstFullRow',
      id: 2054,
      PC: {
        tnode: { dom: ['.t-table__first-full-row', 'td[colspan="3"]'] },
        wrapper: 'getNormalTableMount',
      },
    },
    fixedRows_2277: {
      field_name: 'fixedRows',
      id: 2277,
      PC: {
        dom: { '[3, 1]': { '.t-table__row--fixed-top': 3, '.t-table__row--fixed-bottom': 1 } },
        wrapper: 'getNormalTableMount',
      },
    },
    footData_2348: {
      field_name: 'footData',
      id: 2348,
      PC: { dom: ['tfoot.t-table__footer', { 'tfoot > tr': 2 }], wrapper: 'getNormalTableMount' },
    },
    footerAffixProps_2633: { field_name: 'footerAffixProps', id: 2633 },
    footerAffixedBottom_2632: { field_name: 'footerAffixedBottom', id: 2632 },
    footerSummary_2878: {
      field_name: 'footerSummary',
      id: 2878,
      PC: {
        tnode: { dom: ['.t-table__footer', '.t-table__row-full-element', 'td[colspan="3"]'] },
        wrapper: 'getNormalTableMount',
      },
    },
    headerAffixProps_2382: { field_name: 'headerAffixProps', id: 2382 },
    headerAffixedTop_2381: { field_name: 'headerAffixedTop', id: 2381 },
    height_329: { field_name: 'height', id: 329 },
    horizontalScrollAffixedBottom_2761: { field_name: 'horizontalScrollAffixedBottom', id: 2761 },
    hover_326: {
      field_name: 'hover',
      id: 326,
      PC: { className: 't-table--hoverable', wrapper: 'getNormalTableMount' },
    },
    lastFullRow_2056: {
      field_name: 'lastFullRow',
      id: 2056,
      PC: {
        tnode: { dom: ['.t-table__last-full-row', 'td[colspan="3"]'] },
        wrapper: 'getNormalTableMount',
      },
    },
    loading_332: {
      field_name: 'loading',
      id: 332,
      PC: { tnode: { dom: ['.t-loading'] }, dom: '.t-loading', wrapper: 'getNormalTableMount' },
    },
    loadingProps_2278: { field_name: 'loadingProps', id: 2278 },
    maxHeight_585: { field_name: 'maxHeight', id: 585 },
    pagination_331: { field_name: 'pagination', id: 331 },
    paginationAffixedBottom_2762: { field_name: 'paginationAffixedBottom', id: 2762 },
    resizable_2731: {
      field_name: 'resizable',
      id: 2731,
      PC: { className: 't-table--column-resizable', wrapper: 'getNormalTableMount' },
    },
    rowAttributes_2347: {
      field_name: 'rowAttributes',
      id: 2347,
      PC: {
        wrapper: 'getNormalTableMount',
        attribute: [
          {
            value: "{ 'data-level': 'level-1' }",
            expect: [{ dom: 'tbody > tr', attribute: { 'data-level': 'level-1' } }],
          },
          {
            value: "[{ 'data-level': 'level-1' }, { 'data-name': 'tdesign' }]",
            expect: [
              { dom: 'tbody > tr', attribute: { 'data-level': 'level-1', 'data-name': 'tdesign' } },
            ],
          },
          {
            value: "() => [{ 'data-level': 'level-1' }, { 'data-name': 'tdesign' }]",
            expect: [
              { dom: 'tbody > tr', attribute: { 'data-level': 'level-1', 'data-name': 'tdesign' } },
            ],
          },
          {
            value: "[() => [{ 'data-level': 'level-1' }, { 'data-name': 'tdesign' }]]",
            expect: [
              { dom: 'tbody > tr', attribute: { 'data-level': 'level-1', 'data-name': 'tdesign' } },
            ],
          },
        ],
      },
    },
    rowClassName_330: {
      field_name: 'rowClassName',
      id: 330,
      PC: {
        wrapper: 'getNormalTableMount',
        className: [
          {
            value: "'tdesign-class'",
            expect: [{ dom: 'tbody > tr', className: { 'tdesign-class': true } }],
          },
          {
            value: "{ 'tdesign-class': true, 'tdesign-class-next': false }",
            expect: [
              {
                dom: 'tbody > tr',
                className: { 'tdesign-class': true, 'tdesign-class-next': false },
              },
            ],
          },
          {
            value:
              "['tdesign-class-default', { 'tdesign-class': true, 'tdesign-class-next': false }]",
            expect: [
              {
                dom: 'tbody > tr',
                className: {
                  'tdesign-class-default': true,
                  'tdesign-class': true,
                  'tdesign-class-next': false,
                },
              },
            ],
          },
          {
            value: "() => ({ 'tdesign-class': true, 'tdesign-class-next': false })",
            expect: [
              {
                dom: 'tbody > tr',
                className: { 'tdesign-class': true, 'tdesign-class-next': false },
              },
            ],
          },
        ],
      },
    },
    rowKey_321: { field_name: 'rowKey', id: 321 },
    rowspanAndColspan_1226: { field_name: 'rowspanAndColspan', id: 1226 },
    rowspanAndColspanInFooter_2879: { field_name: 'rowspanAndColspanInFooter', id: 2879 },
    scroll_2188: { field_name: 'scroll', id: 2188 },
    showHeader_3010: {
      field_name: 'showHeader',
      id: 3010,
      PC: { dom: 'thead', wrapper: 'getNormalTableMount', snapshot: true },
    },
    size_2798: {
      field_name: 'size',
      id: 2798,
      PC: {
        className: ['t-size-s', { 't-size-m': false }, 't-size-l'],
        wrapper: 'getNormalTableMount',
        snapshot: true,
      },
    },
    stripe_327: {
      field_name: 'stripe',
      id: 327,
      PC: { className: 't-table--striped', wrapper: 'getNormalTableMount' },
    },
    tableContentWidth_2274: { field_name: 'tableContentWidth', id: 2274 },
    tableLayout_322: {
      field_name: 'tableLayout',
      id: 322,
      PC: {
        dom: ['table.t-table--layout-auto', 'table.t-table--layout-fixed'],
        wrapper: 'getNormalTableMount',
        snapshot: true,
      },
    },
    topContent_2055: {
      field_name: 'topContent',
      id: 2055,
      PC: { tnode: true, wrapper: 'getNormalTableMount' },
    },
    verticalAlign_323: {
      field_name: 'verticalAlign',
      id: 323,
      PC: {
        className: [
          't-vertical-align-top',
          { 't-vertical-align-middle': false },
          't-vertical-align-bottom',
        ],
        wrapper: 'getNormalTableMount',
      },
    },
    cellClick_2196: { field_name: 'cellClick', id: 2196 },
    pageChange_1111: { field_name: 'pageChange', id: 1111 },
    rowClick_354: { field_name: 'rowClick', id: 354 },
    rowDblclick_355: { field_name: 'rowDblclick', id: 355 },
    rowMousedown_589: { field_name: 'rowMousedown', id: 589 },
    rowMouseenter_1826: { field_name: 'rowMouseenter', id: 1826 },
    rowMouseleave_1827: { field_name: 'rowMouseleave', id: 1827 },
    rowMouseover_587: { field_name: 'rowMouseover', id: 587 },
    rowMouseup_588: { field_name: 'rowMouseup', id: 588 },
    scroll_2380: { field_name: 'scroll', id: 2380 },
    scrollX_591: { field_name: 'scrollX', id: 591 },
    scrollY_590: { field_name: 'scrollY', id: 590 },
    '<T extends TableRowData = TableRowData>【interface TableRowData { [key: string]: any; children?: TableRowData[]; }】_586':
      {
        field_name:
          '<T extends TableRowData = TableRowData>【interface TableRowData { [key: string]: any; children?: TableRowData[]; }】',
        id: 586,
      },
  },
  BaseTableCol: {
    align_343: { field_name: 'align', id: 343 },
    attrs_801: { field_name: 'attrs', id: 801 },
    cell_803: { field_name: 'cell', id: 803 },
    cell_1056: { field_name: 'cell', id: 1056 },
    children_1267: { field_name: 'children', id: 1267 },
    className_1054: { field_name: 'className', id: 1054 },
    colKey_345: { field_name: 'colKey', id: 345 },
    colspan_3017: { field_name: 'colspan', id: 3017 },
    ellipsis_802: { field_name: 'ellipsis', id: 802 },
    ellipsisTitle_2653: { field_name: 'ellipsisTitle', id: 2653 },
    fixed_344: { field_name: 'fixed', id: 344 },
    foot_2275: { field_name: 'foot', id: 2275 },
    foot_2276: { field_name: 'foot', id: 2276 },
    minWidth_2877: { field_name: 'minWidth', id: 2877 },
    render_986: { field_name: 'render', id: 986 },
    resizable_3012: { field_name: 'resizable', id: 3012 },
    resize_2732: { field_name: 'resize', id: 2732 },
    stopPropagation_3219: { field_name: 'stopPropagation', id: 3219 },
    title_804: { field_name: 'title', id: 804 },
    title_1055: { field_name: 'title', id: 1055 },
    width_799: { field_name: 'width', id: 799 },
    '<T extends TableRowData = TableRowData>【type DataType = TableRowData】_989': {
      field_name: '<T extends TableRowData = TableRowData>【type DataType = TableRowData】',
      id: 989,
    },
  },
  PrimaryTable: {
    asyncLoading_333: { field_name: 'asyncLoading', id: 333 },
    columnController_2005: { field_name: 'columnController', id: 2005 },
    columnControllerVisible_2527: { field_name: 'columnControllerVisible', id: 2527 },
    columns_593: { field_name: 'columns', id: 593 },
    displayColumns_2491: { field_name: 'displayColumns', id: 2491 },
    dragSort_2349: { field_name: 'dragSort', id: 2349 },
    dragSortOptions_2589: { field_name: 'dragSortOptions', id: 2589 },
    editableCellState_2937: { field_name: 'editableCellState', id: 2937 },
    editableRowKeys_2817: { field_name: 'editableRowKeys', id: 2817 },
    expandIcon_1240: { field_name: 'expandIcon', id: 1240 },
    expandOnRowClick_1219: { field_name: 'expandOnRowClick', id: 1219 },
    expandedRow_809: { field_name: 'expandedRow', id: 809 },
    expandedRowKeys_335: { field_name: 'expandedRowKeys', id: 335 },
    filterIcon_830: { field_name: 'filterIcon', id: 830 },
    filterRow_2063: { field_name: 'filterRow', id: 2063 },
    filterValue_836: { field_name: 'filterValue', id: 836 },
    hideSortTips_2675: { field_name: 'hideSortTips', id: 2675 },
    indeterminateSelectedRowKeys_2799: { field_name: 'indeterminateSelectedRowKeys', id: 2799 },
    multipleSort_985: { field_name: 'multipleSort', id: 985 },
    reserveSelectedRowOnPaginate_3201: { field_name: 'reserveSelectedRowOnPaginate', id: 3201 },
    selectOnRowClick_3209: { field_name: 'selectOnRowClick', id: 3209 },
    selectedRowKeys_337: { field_name: 'selectedRowKeys', id: 337 },
    showSortColumnBgColor_3011: { field_name: 'showSortColumnBgColor', id: 3011 },
    sort_834: { field_name: 'sort', id: 834 },
    sortIcon_2379: { field_name: 'sortIcon', id: 2379 },
    sortOnRowDraggable_1457: { field_name: 'sortOnRowDraggable', id: 1457 },
    asyncLoadingClick_1448: { field_name: 'asyncLoadingClick', id: 1448 },
    cellClick_2197: { field_name: 'cellClick', id: 2197 },
    change_1270: { field_name: 'change', id: 1270 },
    columnChange_2353: { field_name: 'columnChange', id: 2353 },
    columnChange_2555: { field_name: 'columnChange', id: 2555 },
    columnControllerVisibleChange_2529: { field_name: 'columnControllerVisibleChange', id: 2529 },
    dataChange_1447: { field_name: 'dataChange', id: 1447 },
    displayColumnsChange_2492: { field_name: 'displayColumnsChange', id: 2492 },
    dragSort_1496: { field_name: 'dragSort', id: 1496 },
    expandChange_353: { field_name: 'expandChange', id: 353 },
    filterChange_829: { field_name: 'filterChange', id: 829 },
    rowEdit_2819: { field_name: 'rowEdit', id: 2819 },
    rowValidate_2820: { field_name: 'rowValidate', id: 2820 },
    selectChange_338: { field_name: 'selectChange', id: 338 },
    sortChange_339: { field_name: 'sortChange', id: 339 },
    validate_2907: { field_name: 'validate', id: 2907 },
    validateRowData_2821: { field_name: 'validateRowData', id: 2821 },
    validateTableData_2908: { field_name: 'validateTableData', id: 2908 },
    "Omit<TdBaseTableProps<T>, 'columns' | 'onCellClick'>_596": {
      field_name: "Omit<TdBaseTableProps<T>, 'columns' | 'onCellClick'>",
      id: 596,
    },
    '<T extends TableRowData =  TableRowData>_595': {
      field_name: '<T extends TableRowData =  TableRowData>',
      id: 595,
    },
  },
  PrimaryTableCol: {
    cell_993: { field_name: 'cell', id: 993 },
    cell_2019: { field_name: 'cell', id: 2019 },
    checkProps_347: { field_name: 'checkProps', id: 347 },
    children_2554: { field_name: 'children', id: 2554 },
    colKey_2391: { field_name: 'colKey', id: 2391 },
    disabled_348: { field_name: 'disabled', id: 348 },
    edit_2700: { field_name: 'edit', id: 2700 },
    filter_828: { field_name: 'filter', id: 828 },
    render_995: { field_name: 'render', id: 995 },
    sortType_831: { field_name: 'sortType', id: 831 },
    sorter_833: { field_name: 'sorter', id: 833 },
    title_994: { field_name: 'title', id: 994 },
    type_592: { field_name: 'type', id: 592 },
    "Omit<BaseTableCol, 'cell' | 'title' | 'render' | 'children'>_991": {
      field_name: "Omit<BaseTableCol, 'cell' | 'title' | 'render' | 'children'>",
      id: 991,
    },
    '<T extends TableRowData = TableRowData>_814': {
      field_name: '<T extends TableRowData = TableRowData>',
      id: 814,
    },
  },
  EnhancedTable: {
    beforeDragSort_2690: { field_name: 'beforeDragSort', id: 2690 },
    tree_1832: { field_name: 'tree', id: 1832 },
    treeExpandAndFoldIcon_2672: { field_name: 'treeExpandAndFoldIcon', id: 2672 },
    abnormalDragSort_2689: { field_name: 'abnormalDragSort', id: 2689 },
    treeExpandChange_2588: { field_name: 'treeExpandChange', id: 2588 },
    appendTo_2704: { field_name: 'appendTo', id: 2704 },
    expandAll_2687: { field_name: 'expandAll', id: 2687 },
    foldAll_2688: { field_name: 'foldAll', id: 2688 },
    getData_2008: { field_name: 'getData', id: 2008 },
    getTreeExpandedRow_2983: { field_name: 'getTreeExpandedRow', id: 2983 },
    getTreeNode_2708: { field_name: 'getTreeNode', id: 2708 },
    insertAfter_2705: { field_name: 'insertAfter', id: 2705 },
    insertBefore_2706: { field_name: 'insertBefore', id: 2706 },
    remove_2007: { field_name: 'remove', id: 2007 },
    resetData_2876: { field_name: 'resetData', id: 2876 },
    setData_2006: { field_name: 'setData', id: 2006 },
    swapData_2707: { field_name: 'swapData', id: 2707 },
    toggleExpandData_2506: { field_name: 'toggleExpandData', id: 2506 },
    'TdPrimaryTableProps<T>_2361': { field_name: 'TdPrimaryTableProps<T>', id: 2361 },
    '<T extends TableRowData = TableRowData>_2018': {
      field_name: '<T extends TableRowData = TableRowData>',
      id: 2018,
    },
  },
  TableRowState: {
    disabled_2020: { field_name: 'disabled', id: 2020 },
    expandChildrenLength_2016: { field_name: 'expandChildrenLength', id: 2016 },
    expanded_2012: { field_name: 'expanded', id: 2012 },
    id_2679: { field_name: 'id', id: 2679 },
    level_2014: { field_name: 'level', id: 2014 },
    parent_2013: { field_name: 'parent', id: 2013 },
    path_2015: { field_name: 'path', id: 2015 },
    row_2010: { field_name: 'row', id: 2010 },
    rowIndex_2011: { field_name: 'rowIndex', id: 2011 },
    '<T extends TableRowData = TableRowData>_2009': {
      field_name: '<T extends TableRowData = TableRowData>',
      id: 2009,
    },
  },
  TableColumnFilter: {
    component_2060: { field_name: 'component', id: 2060 },
    confirmEvents_2730: { field_name: 'confirmEvents', id: 2730 },
    list_2058: { field_name: 'list', id: 2058 },
    popupProps_3208: { field_name: 'popupProps', id: 3208 },
    props_2059: { field_name: 'props', id: 2059 },
    resetValue_2062: { field_name: 'resetValue', id: 2062 },
    showConfirmAndReset_2061: { field_name: 'showConfirmAndReset', id: 2061 },
    type_2057: { field_name: 'type', id: 2057 },
  },
  TableColumnController: {
    buttonProps_2525: { field_name: 'buttonProps', id: 2525 },
    checkboxProps_2522: { field_name: 'checkboxProps', id: 2522 },
    dialogProps_2523: { field_name: 'dialogProps', id: 2523 },
    displayType_2521: { field_name: 'displayType', id: 2521 },
    fields_2520: { field_name: 'fields', id: 2520 },
    hideTriggerButton_2528: { field_name: 'hideTriggerButton', id: 2528 },
    placement_2524: { field_name: 'placement', id: 2524 },
  },
  TableEditableCellConfig: {
    abortEditOnEvent_2697: { field_name: 'abortEditOnEvent', id: 2697 },
    component_2695: { field_name: 'component', id: 2695 },
    defaultEditable_2938: { field_name: 'defaultEditable', id: 2938 },
    on_3259: { field_name: 'on', id: 3259 },
    onEdited_2698: { field_name: 'onEdited', id: 2698 },
    props_2696: { field_name: 'props', id: 2696 },
    rules_2699: { field_name: 'rules', id: 2699 },
    showEditIcon_2818: { field_name: 'showEditIcon', id: 2818 },
    '<T extends TableRowData = TableRowData>_2701': {
      field_name: '<T extends TableRowData = TableRowData>',
      id: 2701,
    },
  },
  TableTreeConfig: {
    checkStrictly_2685: { field_name: 'checkStrictly', id: 2685 },
    childrenKey_2684: { field_name: 'childrenKey', id: 2684 },
    defaultExpandAll_2686: { field_name: 'defaultExpandAll', id: 2686 },
    expandTreeNodeOnClick_3211: { field_name: 'expandTreeNodeOnClick', id: 3211 },
    indent_2682: { field_name: 'indent', id: 2682 },
    treeNodeColumnIndex_2683: { field_name: 'treeNodeColumnIndex', id: 2683 },
  },
  InfinityScroll: {
    bufferSize_2186: { field_name: 'bufferSize', id: 2186 },
    isFixedRowHeight_2187: { field_name: 'isFixedRowHeight', id: 2187 },
    rowHeight_2185: { field_name: 'rowHeight', id: 2185 },
    threshold_2399: { field_name: 'threshold', id: 2399 },
    type_2184: { field_name: 'type', id: 2184 },
  },
};
