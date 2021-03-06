
/**
 * @type {Object}
 */
let olx;


/**
 * @typedef {{duration: (number|undefined),
 *     delta: (number|undefined)}}
 */
olx.interaction.DoubleClickZoomOptions;


/**
 * Animation duration in milliseconds. Default is `250`.
 * @type {number|undefined}
 * @api
 */
olx.interaction.DoubleClickZoomOptions.prototype.duration;


/**
 * The zoom delta applied on each double click, default is `1`.
 * @type {number|undefined}
 * @api
 */
olx.interaction.DoubleClickZoomOptions.prototype.delta;


/**
 * @typedef {{formatConstructors: (Array.<function(new: ol.format.Feature)>|undefined),
 *     source: (ol.source.Vector|undefined),
 *     projection: ol.ProjectionLike,
 *     target: (Element|undefined)}}
 */
olx.interaction.DragAndDropOptions;


/**
 * Format constructors.
 * @type {Array.<function(new: ol.format.Feature)>|undefined}
 * @api
 */
olx.interaction.DragAndDropOptions.prototype.formatConstructors;


/**
 * Optional vector source where features will be added.  If a source is provided
 * all existing features will be removed and new features will be added when
 * they are dropped on the target.  If you want to add features to a vector
 * source without removing the existing features (append only), instead of
 * providing the source option listen for the "addfeatures" event.
 * @type {ol.source.Vector|undefined}
 * @api
 */
olx.interaction.DragAndDropOptions.prototype.source;


/**
 * Target projection. By default, the map's view's projection is used.
 * @type {ol.ProjectionLike}
 * @api
 */
olx.interaction.DragAndDropOptions.prototype.projection;


/**
 * The element that is used as the drop target, default is the viewport element.
 * @type {Element|undefined}
 * @api
 */
olx.interaction.DragAndDropOptions.prototype.target;


/**
 * @typedef {{className: (string|undefined),
 *     condition: (ol.EventsConditionType|undefined),
 *     minArea: (number|undefined),
 *     boxEndCondition: (ol.DragBoxEndConditionType|undefined)}}
 */
olx.interaction.DragBoxOptions;


/**
 * CSS class name for styling the box. The default is `ol-dragbox`.
 * @type {string|undefined}
 * @api
 */
olx.interaction.DragBoxOptions.prototype.className;


/**
 * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * Default is {@link ol.events.condition.always}.
 * @type {ol.EventsConditionType|undefined}
 * @api
 */
olx.interaction.DragBoxOptions.prototype.condition;


/**
 * The minimum area of the box in pixel, this value is used by the default
 * `boxEndCondition` function. Default is `64`.
 * @type {number|undefined}
 * @api
 */
olx.interaction.DragBoxOptions.prototype.minArea;


/**
 * A function that takes a {@link module:ol/MapBrowserEvent~MapBrowserEvent} and two
 * {@link ol.Pixel}s to indicate whether a `boxend` event should be fired.
 * Default is `true` if the area of the box is bigger than the `minArea` option.
 * @type {ol.DragBoxEndConditionType|undefined}
 * @api
 */
olx.interaction.DragBoxOptions.prototype.boxEndCondition;


/**
 * @typedef {{condition: (ol.EventsConditionType|undefined),
 *     kinetic: (ol.Kinetic|undefined)}}
 */
olx.interaction.DragPanOptions;


/**
 * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * Default is {@link ol.events.condition.noModifierKeys}.
 * @type {ol.EventsConditionType|undefined}
 * @api
 */
olx.interaction.DragPanOptions.prototype.condition;


/**
 * Kinetic inertia to apply to the pan.
 * @type {ol.Kinetic|undefined}
 * @api
 */
olx.interaction.DragPanOptions.prototype.kinetic;


/**
 * @typedef {{condition: (ol.EventsConditionType|undefined),
 *     duration: (number|undefined)}}
 */
olx.interaction.DragRotateAndZoomOptions;


/**
 * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * Default is {@link ol.events.condition.shiftKeyOnly}.
 * @type {ol.EventsConditionType|undefined}
 * @api
 */
olx.interaction.DragRotateAndZoomOptions.prototype.condition;


/**
 * Animation duration in milliseconds. Default is `400`.
 * @type {number|undefined}
 * @api
 */
olx.interaction.DragRotateAndZoomOptions.prototype.duration;


/**
 * @typedef {{condition: (ol.EventsConditionType|undefined),
 *     duration: (number|undefined)}}
 */
olx.interaction.DragRotateOptions;


/**
 * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * Default is {@link ol.events.condition.altShiftKeysOnly}.
 * @type {ol.EventsConditionType|undefined}
 * @api
 */
olx.interaction.DragRotateOptions.prototype.condition;


/**
 * Animation duration in milliseconds. Default is `250`.
 * @type {number|undefined}
 * @api
 */
olx.interaction.DragRotateOptions.prototype.duration;


/**
 * @typedef {{className: (string|undefined),
 *     condition: (ol.EventsConditionType|undefined),
 *     duration: (number|undefined),
 *     out: (boolean|undefined)}}
 */
olx.interaction.DragZoomOptions;


/**
 * CSS class name for styling the box. The default is `ol-dragzoom`.
 * @type {string|undefined}
 * @api
 */
olx.interaction.DragZoomOptions.prototype.className;


/**
 * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * Default is {@link ol.events.condition.shiftKeyOnly}.
 * @type {ol.EventsConditionType|undefined}
 * @api
 */
olx.interaction.DragZoomOptions.prototype.condition;


/**
 * Animation duration in milliseconds. Default is `200`.
 * @type {number|undefined}
 * @api
 */
olx.interaction.DragZoomOptions.prototype.duration;


/**
 * Use interaction for zooming out. Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.interaction.DragZoomOptions.prototype.out;


/**
 * @typedef {{clickTolerance: (number|undefined),
 *     features: (ol.Collection.<module:ol/Feature~Feature>|undefined),
 *     source: (ol.source.Vector|undefined),
 *     dragVertexDelay: (number|undefined),
 *     snapTolerance: (number|undefined),
 *     type: (module:ol/geom/GeometryType~GeometryType|string),
 *     stopClick: (boolean|undefined),
 *     maxPoints: (number|undefined),
 *     minPoints: (number|undefined),
 *     finishCondition: (ol.EventsConditionType|undefined),
 *     style: (ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined),
 *     geometryFunction: (ol.DrawGeometryFunctionType|undefined),
 *     geometryName: (string|undefined),
 *     condition: (ol.EventsConditionType|undefined),
 *     freehand: (boolean|undefined),
 *     freehandCondition: (ol.EventsConditionType|undefined),
 *     wrapX: (boolean|undefined)}}
 */
olx.interaction.DrawOptions;


/**
 * The maximum distance in pixels between "down" and "up" for a "up" event
 * to be considered a "click" event and actually add a point/vertex to the
 * geometry being drawn.  Default is 6 pixels.  That value was chosen for
 * the draw interaction to behave correctly on mouse as well as on touch
 * devices.
 * @type {number|undefined}
 * @api
 */
olx.interaction.DrawOptions.prototype.clickTolerance;


/**
 * Destination collection for the drawn features.
 * @type {ol.Collection.<module:ol/Feature~Feature>|undefined}
 * @api
 */
olx.interaction.DrawOptions.prototype.features;


/**
 * Destination source for the drawn features.
 * @type {ol.source.Vector|undefined}
 * @api
 */
olx.interaction.DrawOptions.prototype.source;


/**
 * Delay in milliseconds after pointerdown before the current vertex can be
 * dragged to its exact position. Default is 500 ms.
 * @type {number|undefined}
 */
olx.interaction.DrawOptions.prototype.dragVertexDelay;


/**
 * Pixel distance for snapping to the drawing finish. Default is `12`.
 * @type {number|undefined}
 * @api
 */
olx.interaction.DrawOptions.prototype.snapTolerance;


/**
 * Drawing type ('Point', 'LineString', 'Polygon', 'MultiPoint',
 * 'MultiLineString', 'MultiPolygon' or 'Circle').
 * @type {module:ol/geom/GeometryType~GeometryType|string}
 * @api
 */
olx.interaction.DrawOptions.prototype.type;


/**
 * Stop click, singleclick, and doubleclick events from firing during drawing.
 * Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.interaction.DrawOptions.prototype.stopClick;


/**
 * The number of points that can be drawn before a polygon ring or line string
 * is finished. The default is no restriction.
 * @type {number|undefined}
 * @api
 */
olx.interaction.DrawOptions.prototype.maxPoints;


/**
 * The number of points that must be drawn before a polygon ring or line string
 * can be finished. Default is `3` for polygon rings and `2` for line strings.
 * @type {number|undefined}
 * @api
 */
olx.interaction.DrawOptions.prototype.minPoints;


/**
 * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether the drawing can be finished.
 * @type {ol.EventsConditionType|undefined}
 * @api
 */
olx.interaction.DrawOptions.prototype.finishCondition;


/**
 * Style for sketch features.
 * @type {ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined}
 * @api
 */
olx.interaction.DrawOptions.prototype.style;


/**
 * Function that is called when a geometry's coordinates are updated.
 * @type {ol.DrawGeometryFunctionType|undefined}
 * @api
 */
olx.interaction.DrawOptions.prototype.geometryFunction;


/**
 * Geometry name to use for features created by the draw interaction.
 * @type {string|undefined}
 * @api
 */
olx.interaction.DrawOptions.prototype.geometryName;


/**
 * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * By default {@link ol.events.condition.noModifierKeys}, i.e. a click, adds a
 * vertex or deactivates freehand drawing.
 * @type {ol.EventsConditionType|undefined}
 * @api
 */
olx.interaction.DrawOptions.prototype.condition;


/**
 * Operate in freehand mode for lines, polygons, and circles.  This makes the
 * interaction always operate in freehand mode and takes precedence over any
 * `freehandCondition` option.
 * @type {boolean|undefined}
 * @api
 */
olx.interaction.DrawOptions.prototype.freehand;


/**
 * Condition that activates freehand drawing for lines and polygons. This
 * function takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean to
 * indicate whether that event should be handled. The default is
 * {@link ol.events.condition.shiftKeyOnly}, meaning that the Shift key
 * activates freehand drawing.
 * @type {ol.EventsConditionType|undefined}
 * @api
 */
olx.interaction.DrawOptions.prototype.freehandCondition;


/**
 * Wrap the world horizontally on the sketch overlay. Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.interaction.DrawOptions.prototype.wrapX;


/**
 * @typedef {{extent: (ol.Extent|undefined),
 *     boxStyle: (ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined),
 *     pixelTolerance: (number|undefined),
 *     pointerStyle: (ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined),
 *     wrapX: (boolean|undefined)}}
 * @api
 */
olx.interaction.ExtentOptions;

/**
 * Initial extent. Defaults to no initial extent
 * @type {ol.Extent|undefined}
 * @api
 */
olx.interaction.ExtentOptions.prototype.extent;

/**
 * Style for the drawn extent box.
 * Defaults to ol.style.Style.createDefaultEditing()[module:ol/geom/GeometryType~GeometryType.POLYGON]
 * @type {ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined}
 * @api
 */
olx.interaction.ExtentOptions.prototype.boxStyle;

/**
 * Pixel tolerance for considering the pointer close enough to a segment or
 * vertex for editing. Default is `10`.
 * @type {number|undefined}
 * @api
 */
olx.interaction.ExtentOptions.prototype.pixelTolerance;

/**
 * Style for the cursor used to draw the extent.
 * Defaults to ol.style.Style.createDefaultEditing()[module:ol/geom/GeometryType~GeometryType.POINT]
 * @type {ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined}
 * @api
 */
olx.interaction.ExtentOptions.prototype.pointerStyle;

/**
 * Wrap the drawn extent across multiple maps in the X direction?
 * Only affects visuals, not functionality. Defaults to false.
 * @type {boolean|undefined}
 * @api
 */
olx.interaction.ExtentOptions.prototype.wrapX;


/**
 * @typedef {{
 *     features: (ol.Collection.<module:ol/Feature~Feature>|undefined),
 *     layers: (undefined|Array.<ol.layer.Layer>|function(ol.layer.Layer): boolean),
 *     hitTolerance: (number|undefined)
 * }}
 */
olx.interaction.TranslateOptions;


/**
 * Only features contained in this collection will be able to be translated. If
 * not specified, all features on the map will be able to be translated.
 * @type {ol.Collection.<module:ol/Feature~Feature>|undefined}
 * @api
 */
olx.interaction.TranslateOptions.prototype.features;


/**
 * A list of layers from which features should be
 * translated. Alternatively, a filter function can be provided. The
 * function will be called for each layer in the map and should return
 * `true` for layers that you want to be translatable. If the option is
 * absent, all visible layers will be considered translatable.
 * @type {undefined|Array.<ol.layer.Layer>|function(ol.layer.Layer): boolean}
 * @api
 */
olx.interaction.TranslateOptions.prototype.layers;


/**
 * Hit-detection tolerance. Pixels inside the radius around the given position
 * will be checked for features. This only works for the canvas renderer and
 * not for WebGL. Default is `0`.
 * @type {number|undefined}
 * @api
 */
olx.interaction.TranslateOptions.prototype.hitTolerance;


/**
 * @typedef {{condition: (ol.EventsConditionType|undefined),
 *     duration: (number|undefined),
 *     pixelDelta: (number|undefined)}}
 */
olx.interaction.KeyboardPanOptions;


/**
 * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * Default is {@link ol.events.condition.noModifierKeys} and
 * {@link ol.events.condition.targetNotEditable}.
 * @type {ol.EventsConditionType|undefined}
 * @api
 */
olx.interaction.KeyboardPanOptions.prototype.condition;


/**
 * Animation duration in milliseconds. Default is `100`.
 * @type {number|undefined}
 * @api
 */
olx.interaction.KeyboardPanOptions.prototype.duration;


/**
 * Pixel The amount to pan on each key press. Default is `128` pixels.
 * @type {number|undefined}
 * @api
 */
olx.interaction.KeyboardPanOptions.prototype.pixelDelta;


/**
 * @typedef {{duration: (number|undefined),
 *     condition: (ol.EventsConditionType|undefined),
 *     delta: (number|undefined)}}
 */
olx.interaction.KeyboardZoomOptions;


/**
 * Animation duration in milliseconds. Default is `100`.
 * @type {number|undefined}
 * @api
 */
olx.interaction.KeyboardZoomOptions.prototype.duration;


/**
 * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * Default is {@link ol.events.condition.targetNotEditable}.
 * @type {ol.EventsConditionType|undefined}
 * @api
 */
olx.interaction.KeyboardZoomOptions.prototype.condition;


/**
 * The amount to zoom on each key press. Default is `1`.
 * @type {number|undefined}
 * @api
 */
olx.interaction.KeyboardZoomOptions.prototype.delta;


/**
 * @typedef {{
 *     condition: (ol.EventsConditionType|undefined),
 *     deleteCondition: (ol.EventsConditionType|undefined),
 *     insertVertexCondition: (ol.EventsConditionType|undefined),
 *     pixelTolerance: (number|undefined),
 *     style: (ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined),
 *     source: (ol.source.Vector|undefined),
 *     features: (ol.Collection.<module:ol/Feature~Feature>|undefined),
 *     wrapX: (boolean|undefined)
 * }}
 */
olx.interaction.ModifyOptions;


/**
 * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event will be considered to add or move a vertex
 * to the sketch.
 * Default is {@link ol.events.condition.primaryAction}.
 * @type {ol.EventsConditionType|undefined}
 * @api
 */
olx.interaction.ModifyOptions.prototype.condition;


/**
 * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * By default, {@link ol.events.condition.singleClick} with
 * {@link ol.events.condition.altKeyOnly} results in a vertex deletion.
 * @type {ol.EventsConditionType|undefined}
 * @api
 */
olx.interaction.ModifyOptions.prototype.deleteCondition;


/**
 * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether a new vertex can be added to the sketch features.
 * Default is {@link ol.events.condition.always}
 * @type {ol.EventsConditionType|undefined}
 * @api
 */
olx.interaction.ModifyOptions.prototype.insertVertexCondition;


/**
 * Pixel tolerance for considering the pointer close enough to a segment or
 * vertex for editing. Default is `10`.
 * @type {number|undefined}
 * @api
 */
olx.interaction.ModifyOptions.prototype.pixelTolerance;


/**
 * Style used for the features being modified. By default the default edit
 * style is used (see {@link ol.style}).
 * @type {ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined}
 * @api
 */
olx.interaction.ModifyOptions.prototype.style;


/**
 * The vector source with features to modify.  If a vector source is not
 * provided, a feature collection must be provided with the features option.
 * @type {ol.source.Vector|undefined}
 * @api
 */
olx.interaction.ModifyOptions.prototype.source;


/**
 * The features the interaction works on.  If a feature collection is not
 * provided, a vector source must be provided with the source option.
 * @type {ol.Collection.<module:ol/Feature~Feature>|undefined}
 * @api
 */
olx.interaction.ModifyOptions.prototype.features;


/**
 * Wrap the world horizontally on the sketch overlay. Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.interaction.ModifyOptions.prototype.wrapX;


/**
 * @typedef {{constrainResolution: (boolean|undefined),
 *     condition: (ol.EventsConditionType|undefined),
 *     duration: (number|undefined),
 *     timeout: (number|undefined),
 *     useAnchor: (boolean|undefined)}}
 */
olx.interaction.MouseWheelZoomOptions;


/**
 * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled. Default is {@link ol.events.condition.always}.
 * @type {ol.EventsConditionType|undefined}
 * @api
 */
olx.interaction.MouseWheelZoomOptions.prototype.condition;


/**
 * Animation duration in milliseconds. Default is `250`.
 * @type {number|undefined}
 * @api
 */
olx.interaction.MouseWheelZoomOptions.prototype.duration;


/**
 * Mouse wheel timeout duration in milliseconds. Default is `80`.
 * @type {number|undefined}
 * @api
 */
olx.interaction.MouseWheelZoomOptions.prototype.timeout;


/**
 * When using a trackpad or magic mouse, zoom to the closest integer zoom level
 * after the scroll gesture ends.
 * Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.interaction.MouseWheelZoomOptions.prototype.constrainResolution;


/**
 * Enable zooming using the mouse's location as the anchor. Default is `true`.
 * When set to false, zooming in and out will zoom to the center of the screen
 * instead of zooming on the mouse's location.
 * @type {boolean|undefined}
 * @api
 */
olx.interaction.MouseWheelZoomOptions.prototype.useAnchor;


/**
 * @typedef {{threshold: (number|undefined),
 *     duration: (number|undefined)}}
 */
olx.interaction.PinchRotateOptions;


/**
 * The duration of the animation in milliseconds. Default is `250`.
 * @type {number|undefined}
 * @api
 */
olx.interaction.PinchRotateOptions.prototype.duration;


/**
 * Minimal angle in radians to start a rotation. Default is `0.3`.
 * @type {number|undefined}
 * @api
 */
olx.interaction.PinchRotateOptions.prototype.threshold;


/**
 * @typedef {{
 *     duration: (number|undefined),
 *     constrainResolution: (boolean|undefined)
 * }}
 */
olx.interaction.PinchZoomOptions;


/**
 * Animation duration in milliseconds. Default is `400`.
 * @type {number|undefined}
 * @api
 */
olx.interaction.PinchZoomOptions.prototype.duration;

/**
 * Zoom to the closest integer zoom level after the pinch gesture ends. Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.interaction.PinchZoomOptions.prototype.constrainResolution;


/**
 * @typedef {{handleDownEvent: (function(ol.MapBrowserPointerEvent):boolean|undefined),
 *     handleDragEvent: (function(ol.MapBrowserPointerEvent)|undefined),
 *     handleEvent: (function(module:ol/MapBrowserEvent~MapBrowserEvent):boolean|undefined),
 *     handleMoveEvent: (function(ol.MapBrowserPointerEvent)|undefined),
 *     handleUpEvent: (function(ol.MapBrowserPointerEvent):boolean|undefined)}}
 */
olx.interaction.PointerOptions;


/**
 * Function handling "down" events. If the function returns `true` then a drag
 * sequence is started.
 * @type {(function(ol.MapBrowserPointerEvent):boolean|undefined)}
 * @api
 */
olx.interaction.PointerOptions.prototype.handleDownEvent;


/**
 * Function handling "drag" events. This function is called on "move" events
 * during a drag sequence.
 * @type {(function(ol.MapBrowserPointerEvent)|undefined)}
 * @api
 */
olx.interaction.PointerOptions.prototype.handleDragEvent;


/**
 * Method called by the map to notify the interaction that a browser event was
 * dispatched to the map. The function may return `false` to prevent the
 * propagation of the event to other interactions in the map's interactions
 * chain.
 * @type {(function(module:ol/MapBrowserEvent~MapBrowserEvent):boolean|undefined)}
 * @api
 */
olx.interaction.PointerOptions.prototype.handleEvent;


/**
 * Function handling "move" events. This function is called on "move" events,
 * also during a drag sequence (so during a drag sequence both the
 * `handleDragEvent` function and this function are called).
 * @type {(function(ol.MapBrowserPointerEvent)|undefined)}
 * @api
 */
olx.interaction.PointerOptions.prototype.handleMoveEvent;


/**
 * Function handling "up" events. If the function returns `false` then the
 * current drag sequence is stopped.
 * @type {(function(ol.MapBrowserPointerEvent):boolean|undefined)}
 * @api
 */
olx.interaction.PointerOptions.prototype.handleUpEvent;


/**
 * @typedef {{addCondition: (ol.EventsConditionType|undefined),
 *     condition: (ol.EventsConditionType|undefined),
 *     layers: (undefined|Array.<ol.layer.Layer>|function(ol.layer.Layer): boolean),
 *     style: (ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined),
 *     removeCondition: (ol.EventsConditionType|undefined),
 *     toggleCondition: (ol.EventsConditionType|undefined),
 *     multi: (boolean|undefined),
 *     features: (ol.Collection.<module:ol/Feature~Feature>|undefined),
 *     filter: (ol.SelectFilterFunction|undefined),
 *     wrapX: (boolean|undefined),
 *     hitTolerance: (number|undefined)}}
 */
olx.interaction.SelectOptions;


/**
 * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * By default, this is {@link ol.events.condition.never}. Use this if you want
 * to use different events for add and remove instead of `toggle`.
 * @type {ol.EventsConditionType|undefined}
 * @api
 */
olx.interaction.SelectOptions.prototype.addCondition;


/**
 * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * This is the event for the selected features as a whole. By default, this is
 * {@link ol.events.condition.singleClick}. Clicking on a feature selects that
 * feature and removes any that were in the selection. Clicking outside any
 * feature removes all from the selection.
 * See `toggle`, `add`, `remove` options for adding/removing extra features to/
 * from the selection.
 * @type {ol.EventsConditionType|undefined}
 * @api
 */
olx.interaction.SelectOptions.prototype.condition;


/**
 * A list of layers from which features should be
 * selected. Alternatively, a filter function can be provided. The
 * function will be called for each layer in the map and should return
 * `true` for layers that you want to be selectable. If the option is
 * absent, all visible layers will be considered selectable.
 * @type {undefined|Array.<ol.layer.Layer>|function(ol.layer.Layer): boolean}
 * @api
 */
olx.interaction.SelectOptions.prototype.layers;


/**
 * Style for the selected features. By default the default edit style is used
 * (see {@link ol.style}).
 * @type {ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined}
 * @api
 */
olx.interaction.SelectOptions.prototype.style;


/**
 * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * By default, this is {@link ol.events.condition.never}. Use this if you want
 * to use different events for add and remove instead of `toggle`.
 * @type {ol.EventsConditionType|undefined}
 * @api
 */
olx.interaction.SelectOptions.prototype.removeCondition;


/**
 * A function that takes an {@link module:ol/MapBrowserEvent~MapBrowserEvent} and returns a boolean
 * to indicate whether that event should be handled.
 * This is in addition to the `condition` event. By default,
 * {@link ol.events.condition.shiftKeyOnly}, i.e. pressing `shift` as well as
 * the `condition` event, adds that feature to the current selection if it is
 * not currently selected, and removes it if it is.
 * See `add` and `remove` if you want to use different events instead of a
 * toggle.
 * @type {ol.EventsConditionType|undefined}
 * @api
 */
olx.interaction.SelectOptions.prototype.toggleCondition;


/**
 * A boolean that determines if the default behaviour should select only
 * single features or all (overlapping) features at the clicked map
 * position. Default is false i.e single select
 * @type {boolean|undefined}
 * @api
 */
olx.interaction.SelectOptions.prototype.multi;

/**
 * Collection where the interaction will place selected features. Optional. If
 * not set the interaction will create a collection. In any case the collection
 * used by the interaction is returned by
 * {@link ol.interaction.Select#getFeatures}.
 * @type {ol.Collection.<module:ol/Feature~Feature>|undefined}
 * @api
 */
olx.interaction.SelectOptions.prototype.features;

/**
 * A function that takes an {@link module:ol/Feature~Feature} and an {@link ol.layer.Layer} and
 * returns `true` if the feature may be selected or `false` otherwise.
 * @type {ol.SelectFilterFunction|undefined}
 * @api
 */
olx.interaction.SelectOptions.prototype.filter;


/**
 * Wrap the world horizontally on the selection overlay. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.interaction.SelectOptions.prototype.wrapX;


/**
 * Hit-detection tolerance. Pixels inside the radius around the given position
 * will be checked for features. This only works for the canvas renderer and
 * not for WebGL. Default is `0`.
 * @type {number|undefined}
 * @api
 */
olx.interaction.SelectOptions.prototype.hitTolerance;


/**
 * Options for snap
 * @typedef {{
 *     features: (ol.Collection.<module:ol/Feature~Feature>|undefined),
 *     pixelTolerance: (number|undefined),
 *     source: (ol.source.Vector|undefined),
 *     edge: (boolean|undefined),
 *     vertex: (boolean|undefined)
 * }}
 */
olx.interaction.SnapOptions;


/**
 * Snap to these features. Either this option or source should be provided.
 * @type {ol.Collection.<module:ol/Feature~Feature>|undefined}
 * @api
 */
olx.interaction.SnapOptions.prototype.features;

/**
 * Snap to edges. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.interaction.SnapOptions.prototype.edge;


/**
 * Snap to vertices. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.interaction.SnapOptions.prototype.vertex;


/**
 * Pixel tolerance for considering the pointer close enough to a segment or
 * vertex for snapping. Default is `10` pixels.
 * @type {number|undefined}
 * @api
 */
olx.interaction.SnapOptions.prototype.pixelTolerance;


/**
 * Snap to features from this source. Either this option or features should be provided
 * @type {ol.source.Vector|undefined}
 * @api
 */
olx.interaction.SnapOptions.prototype.source;


/**
 * @typedef {{opacity: (number|undefined),
 *     visible: (boolean|undefined),
 *     extent: (ol.Extent|undefined),
 *     zIndex: (number|undefined),
 *     minResolution: (number|undefined),
 *     maxResolution: (number|undefined)}}
 */
olx.layer.BaseOptions;


/**
 * Opacity (0, 1). Default is `1`.
 * @type {number|undefined}
 * @api
 */
olx.layer.BaseOptions.prototype.opacity;


/**
 * Visibility. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.layer.BaseOptions.prototype.visible;


/**
 * The bounding extent for layer rendering.  The layer will not be rendered
 * outside of this extent.
 * @type {ol.Extent|undefined}
 * @api
 */
olx.layer.BaseOptions.prototype.extent;


/**
 * The z-index for layer rendering.  At rendering time, the layers will be
 * ordered, first by Z-index and then by position. The default Z-index is 0.
 * @type {number|undefined}
 * @api
 */
olx.layer.BaseOptions.prototype.zIndex;


/**
 * The minimum resolution (inclusive) at which this layer will be visible.
 * @type {number|undefined}
 * @api
 */
olx.layer.BaseOptions.prototype.minResolution;


/**
 * The maximum resolution (exclusive) below which this layer will be visible.
 * @type {number|undefined}
 * @api
 */
olx.layer.BaseOptions.prototype.maxResolution;


/**
 * @typedef {{opacity: (number|undefined),
 *     source: (ol.source.Source|undefined),
 *     visible: (boolean|undefined),
 *     extent: (ol.Extent|undefined),
 *     zIndex: (number|undefined),
 *     minResolution: (number|undefined),
 *     maxResolution: (number|undefined)}}
 */
olx.layer.LayerOptions;


/**
 * Opacity (0, 1). Default is `1`.
 * @type {number|undefined}
 * @api
 */
olx.layer.LayerOptions.prototype.opacity;


/**
 * Source for this layer.  If not provided to the constructor, the source can
 * be set by calling {@link ol.layer.Layer#setSource layer.setSource(source)}
 * after construction.
 * @type {ol.source.Source|undefined}
 * @api
 */
olx.layer.LayerOptions.prototype.source;


/**
 * Visibility. Default is `true` (visible).
 * @type {boolean|undefined}
 * @api
 */
olx.layer.LayerOptions.prototype.visible;


/**
 * The bounding extent for layer rendering.  The layer will not be rendered
 * outside of this extent.
 * @type {ol.Extent|undefined}
 * @api
 */
olx.layer.LayerOptions.prototype.extent;


/**
 * The z-index for layer rendering.  At rendering time, the layers will be
 * ordered, first by Z-index and then by position. The default Z-index is 0.
 * @type {number|undefined}
 * @api
 */
olx.layer.LayerOptions.prototype.zIndex;


/**
 * The minimum resolution (inclusive) at which this layer will be visible.
 * @type {number|undefined}
 * @api
 */
olx.layer.LayerOptions.prototype.minResolution;


/**
 * The maximum resolution (exclusive) below which this layer will be visible.
 * @type {number|undefined}
 * @api
 */
olx.layer.LayerOptions.prototype.maxResolution;


/**
 * @typedef {{opacity: (number|undefined),
 *     visible: (boolean|undefined),
 *     extent: (ol.Extent|undefined),
 *     zIndex: (number|undefined),
 *     minResolution: (number|undefined),
 *     maxResolution: (number|undefined),
 *     layers: (Array.<ol.layer.Base>|ol.Collection.<ol.layer.Base>|undefined)}}
 */
olx.layer.GroupOptions;


/**
 * Opacity (0, 1). Default is `1`.
 * @type {number|undefined}
 * @api
 */
olx.layer.GroupOptions.prototype.opacity;


/**
 * Visibility. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.layer.GroupOptions.prototype.visible;


/**
 * The bounding extent for layer rendering.  The layer will not be rendered
 * outside of this extent.
 * @type {ol.Extent|undefined}
 * @api
 */
olx.layer.GroupOptions.prototype.extent;


/**
 * The z-index for layer rendering.  At rendering time, the layers will be
 * ordered, first by Z-index and then by position. The default Z-index is 0.
 * @type {number|undefined}
 * @api
 */
olx.layer.GroupOptions.prototype.zIndex;


/**
 * The minimum resolution (inclusive) at which this layer will be visible.
 * @type {number|undefined}
 * @api
 */
olx.layer.GroupOptions.prototype.minResolution;


/**
 * The maximum resolution (exclusive) below which this layer will be visible.
 * @type {number|undefined}
 * @api
 */
olx.layer.GroupOptions.prototype.maxResolution;


/**
 * Child layers.
 * @type {Array.<ol.layer.Base>|ol.Collection.<ol.layer.Base>|undefined}
 * @api
 */
olx.layer.GroupOptions.prototype.layers;


/**
 * @typedef {{gradient: (Array.<string>|undefined),
 *     radius: (number|undefined),
 *     blur: (number|undefined),
 *     shadow: (number|undefined),
 *     weight: (string|function(module:ol/Feature~Feature):number|undefined),
 *     extent: (ol.Extent|undefined),
 *     minResolution: (number|undefined),
 *     maxResolution: (number|undefined),
 *     opacity: (number|undefined),
 *     source: (ol.source.Vector|undefined),
 *     visible: (boolean|undefined),
 *     zIndex: (number|undefined)}}
 */
olx.layer.HeatmapOptions;


/**
 * The color gradient of the heatmap, specified as an array of CSS color
 * strings. Default is `['#00f', '#0ff', '#0f0', '#ff0', '#f00']`.
 * @type {Array.<string>|undefined}
 * @api
 */
olx.layer.HeatmapOptions.prototype.gradient;


/**
 * Radius size in pixels. Default is `8`.
 * @type {number|undefined}
 * @api
 */
olx.layer.HeatmapOptions.prototype.radius;


/**
 * Blur size in pixels. Default is `15`.
 * @type {number|undefined}
 * @api
 */
olx.layer.HeatmapOptions.prototype.blur;


/**
 * Shadow size in pixels. Default is `250`.
 * @type {number|undefined}
 * @api
 */
olx.layer.HeatmapOptions.prototype.shadow;


/**
 * The feature attribute to use for the weight or a function that returns a
 * weight from a feature. Weight values should range from 0 to 1 (and values
 * outside will be clamped to that range). Default is `weight`.
 * @type {string|function(module:ol/Feature~Feature):number|undefined}
 * @api
 */
olx.layer.HeatmapOptions.prototype.weight;


/**
 * The bounding extent for layer rendering.  The layer will not be rendered
 * outside of this extent.
 * @type {ol.Extent|undefined}
 * @api
 */
olx.layer.HeatmapOptions.prototype.extent;


/**
 * The minimum resolution (inclusive) at which this layer will be visible.
 * @type {number|undefined}
 * @api
 */
olx.layer.HeatmapOptions.prototype.minResolution;


/**
 * The maximum resolution (exclusive) below which this layer will be visible.
 * @type {number|undefined}
 * @api
 */
olx.layer.HeatmapOptions.prototype.maxResolution;


/**
 * Opacity. 0-1. Default is `1`.
 * @type {number|undefined}
 * @api
 */
olx.layer.HeatmapOptions.prototype.opacity;


/**
 * Source.
 * @type {ol.source.Vector}
 * @api
 */
olx.layer.HeatmapOptions.prototype.source;


/**
 * Visibility. Default is `true` (visible).
 * @type {boolean|undefined}
 * @api
 */
olx.layer.HeatmapOptions.prototype.visible;


/**
 * The z-index for layer rendering.  At rendering time, the layers will be
 * ordered, first by Z-index and then by position. The default Z-index is 0.
 * @type {number|undefined}
 * @api
 */
olx.layer.HeatmapOptions.prototype.zIndex;


/**
 * @typedef {{opacity: (number|undefined),
 *     map: (ol.PluggableMap|undefined),
 *     source: (ol.source.Image|undefined),
 *     visible: (boolean|undefined),
 *     extent: (ol.Extent|undefined),
 *     minResolution: (number|undefined),
 *     maxResolution: (number|undefined),
 *     zIndex: (number|undefined)}}
 */
olx.layer.ImageOptions;


/**
 * Opacity (0, 1). Default is `1`.
 * @type {number|undefined}
 * @api
 */
olx.layer.ImageOptions.prototype.opacity;


/**
 * Source for this layer.
 * @type {ol.source.Image}
 * @api
 */
olx.layer.ImageOptions.prototype.source;


/**
 * Sets the layer as overlay on a map. The map will not manage this layer in its
 * layers collection, and the layer will be rendered on top. This is useful for
 * temporary layers. The standard way to add a layer to a map and have it
 * managed by the map is to use {@link ol.Map#addLayer}.
 * @type {ol.PluggableMap|undefined}
 * @api
 */
olx.layer.ImageOptions.prototype.map;


/**
 * Visibility. Default is `true` (visible).
 * @type {boolean|undefined}
 * @api
 */
olx.layer.ImageOptions.prototype.visible;


/**
 * The bounding extent for layer rendering.  The layer will not be rendered
 * outside of this extent.
 * @type {ol.Extent|undefined}
 * @api
 */
olx.layer.ImageOptions.prototype.extent;


/**
 * The minimum resolution (inclusive) at which this layer will be visible.
 * @type {number|undefined}
 * @api
 */
olx.layer.ImageOptions.prototype.minResolution;


/**
 * The maximum resolution (exclusive) below which this layer will be visible.
 * @type {number|undefined}
 * @api
 */
olx.layer.ImageOptions.prototype.maxResolution;


/**
 * The z-index for layer rendering.  At rendering time, the layers will be
 * ordered, first by Z-index and then by position. The default Z-index is 0.
 * @type {number|undefined}
 * @api
 */
olx.layer.ImageOptions.prototype.zIndex;


/**
 * @typedef {{opacity: (number|undefined),
 *     preload: (number|undefined),
 *     source: (ol.source.Tile|undefined),
 *     map: (ol.PluggableMap|undefined),
 *     visible: (boolean|undefined),
 *     extent: (ol.Extent|undefined),
 *     minResolution: (number|undefined),
 *     maxResolution: (number|undefined),
 *     useInterimTilesOnError: (boolean|undefined),
 *     zIndex: (number|undefined)}}
 */
olx.layer.TileOptions;


/**
 * Opacity (0, 1). Default is `1`.
 * @type {number|undefined}
 * @api
 */
olx.layer.TileOptions.prototype.opacity;


/**
 * Preload. Load low-resolution tiles up to `preload` levels. By default
 * `preload` is `0`, which means no preloading.
 * @type {number|undefined}
 * @api
 */
olx.layer.TileOptions.prototype.preload;


/**
 * Source for this layer.
 * @type {ol.source.Tile}
 * @api
 */
olx.layer.TileOptions.prototype.source;


/**
 * Sets the layer as overlay on a map. The map will not manage this layer in its
 * layers collection, and the layer will be rendered on top. This is useful for
 * temporary layers. The standard way to add a layer to a map and have it
 * managed by the map is to use {@link ol.Map#addLayer}.
 * @type {ol.PluggableMap|undefined}
 * @api
 */
olx.layer.TileOptions.prototype.map;


/**
 * Visibility. Default is `true` (visible).
 * @type {boolean|undefined}
 * @api
 */
olx.layer.TileOptions.prototype.visible;


/**
 * The bounding extent for layer rendering.  The layer will not be rendered
 * outside of this extent.
 * @type {ol.Extent|undefined}
 * @api
 */
olx.layer.TileOptions.prototype.extent;


/**
 * The minimum resolution (inclusive) at which this layer will be visible.
 * @type {number|undefined}
 * @api
 */
olx.layer.TileOptions.prototype.minResolution;


/**
 * The maximum resolution (exclusive) below which this layer will be visible.
 * @type {number|undefined}
 * @api
 */
olx.layer.TileOptions.prototype.maxResolution;


/**
 * Use interim tiles on error. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.layer.TileOptions.prototype.useInterimTilesOnError;


/**
 * The z-index for layer rendering.  At rendering time, the layers will be
 * ordered, first by Z-index and then by position. The default Z-index is 0.
 * @type {number|undefined}
 * @api
 */
olx.layer.TileOptions.prototype.zIndex;


/**
 * @typedef {{renderOrder: (ol.RenderOrderFunction|null|undefined),
 *     minResolution: (number|undefined),
 *     maxResolution: (number|undefined),
 *     opacity: (number|undefined),
 *     renderBuffer: (number|undefined),
 *     renderMode: (ol.layer.VectorRenderType|string|undefined),
 *     source: (ol.source.Vector|undefined),
 *     map: (ol.PluggableMap|undefined),
 *     declutter: (boolean|undefined),
 *     style: (ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined),
 *     maxTilesLoading: (number|undefined),
 *     updateWhileAnimating: (boolean|undefined),
 *     updateWhileInteracting: (boolean|undefined),
 *     visible: (boolean|undefined),
 *     zIndex: (number|undefined)}}
 */
olx.layer.VectorOptions;


/**
 * Render mode for vector layers:
 *  * `'image'`: Vector layers are rendered as images. Great performance, but
 *    point symbols and texts are always rotated with the view and pixels are
 *    scaled during zoom animations.
 *  * `'vector'`: Vector layers are rendered as vectors. Most accurate rendering
 *    even during animations, but slower performance.
 * Default is `vector`.
 * @type {ol.layer.VectorRenderType|string|undefined}
 * @api
 */
olx.layer.VectorOptions.prototype.renderMode;


/**
 * Render order. Function to be used when sorting features before rendering. By
 * default features are drawn in the order that they are created. Use `null` to
 * avoid the sort, but get an undefined draw order.
 * @type {ol.RenderOrderFunction|null|undefined}
 * @api
 */
olx.layer.VectorOptions.prototype.renderOrder;


/**
 * Sets the layer as overlay on a map. The map will not manage this layer in its
 * layers collection, and the layer will be rendered on top. This is useful for
 * temporary layers. The standard way to add a layer to a map and have it
 * managed by the map is to use {@link ol.Map#addLayer}.
 * @type {ol.PluggableMap|undefined}
 * @api
 */
olx.layer.VectorOptions.prototype.map;


/**
 * The bounding extent for layer rendering.  The layer will not be rendered
 * outside of this extent.
 * @type {ol.Extent|undefined}
 * @api
 */
olx.layer.VectorOptions.prototype.extent;


/**
 * The minimum resolution (inclusive) at which this layer will be visible.
 * @type {number|undefined}
 * @api
 */
olx.layer.VectorOptions.prototype.minResolution;


/**
 * The maximum resolution (exclusive) below which this layer will be visible.
 * @type {number|undefined}
 * @api
 */
olx.layer.VectorOptions.prototype.maxResolution;


/**
 * Opacity. 0-1. Default is `1`.
 * @type {number|undefined}
 * @api
 */
olx.layer.VectorOptions.prototype.opacity;


/**
 * The buffer around the viewport extent used by the renderer when getting
 * features from the vector source for the rendering or hit-detection.
 * Recommended value: the size of the largest symbol, line width or label.
 * Default is 100 pixels.
 * @type {number|undefined}
 * @api
 */
olx.layer.VectorOptions.prototype.renderBuffer;


/**
 * Source.
 * @type {ol.source.Vector}
 * @api
 */
olx.layer.VectorOptions.prototype.source;


/**
 * Declutter images and text. Decluttering is applied to all image and text
 * styles, and the priority is defined by the z-index of the style. Lower
 * z-index means higher priority. Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.layer.VectorOptions.prototype.declutter;


/**
 * Layer style. See {@link ol.style} for default style which will be used if
 * this is not defined.
 * @type {ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined}
 * @api
 */
olx.layer.VectorOptions.prototype.style;


/**
 * Maximum number tiles to load simultaneously.  Default is `16`.
 * @type {number|undefined}
 */
olx.layer.VectorOptions.prototype.maxTilesLoading;

/**
 * When set to `true`, feature batches will be recreated during animations.
 * This means that no vectors will be shown clipped, but the setting will have a
 * performance impact for large amounts of vector data. When set to `false`,
 * batches will be recreated when no animation is active.  Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.layer.VectorOptions.prototype.updateWhileAnimating;


/**
 * When set to `true`, feature batches will be recreated during interactions.
 * See also `updateWhileAnimating`. Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.layer.VectorOptions.prototype.updateWhileInteracting;


/**
 * Visibility. Default is `true` (visible).
 * @type {boolean|undefined}
 * @api
 */
olx.layer.VectorOptions.prototype.visible;


/**
 * The z-index for layer rendering.  At rendering time, the layers will be
 * ordered, first by Z-index and then by position. The default Z-index is 0.
 * @type {number|undefined}
 * @api
 */
olx.layer.VectorOptions.prototype.zIndex;


/**
 * @typedef {{extent: (ol.Extent|undefined),
 *     map: (ol.PluggableMap|undefined),
 *     minResolution: (number|undefined),
 *     maxResolution: (number|undefined),
 *     opacity: (number|undefined),
 *     preload: (number|undefined),
 *     renderBuffer: (number|undefined),
 *     renderMode: (ol.layer.VectorTileRenderType|string|undefined),
 *     renderOrder: (ol.RenderOrderFunction|undefined),
 *     source: (ol.source.VectorTile|undefined),
 *     declutter: (boolean|undefined),
 *     style: (ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined),
 *     updateWhileAnimating: (boolean|undefined),
 *     updateWhileInteracting: (boolean|undefined),
 *     visible: (boolean|undefined),
 *     zIndex: (number|undefined)}}
 */
olx.layer.VectorTileOptions;


/**
 * The buffer around the tile extent used by the renderer when getting features
 * from the vector tile for the rendering or hit-detection.
 * Recommended value: Vector tiles are usually generated with a buffer, so this
 * value should match the largest possible buffer of the used tiles. It should
 * be at least the size of the largest point symbol or line width.
 * Default is 100 pixels.
 * @type {number|undefined}
 * @api
 */
olx.layer.VectorTileOptions.prototype.renderBuffer;


/**
 * Render mode for vector tiles:
 *  * `'image'`: Vector tiles are rendered as images. Great performance, but
 *    point symbols and texts are always rotated with the view and pixels are
 *    scaled during zoom animations.
 *  * `'hybrid'`: Polygon and line elements are rendered as images, so pixels
 *    are scaled during zoom animations. Point symbols and texts are accurately
 *    rendered as vectors and can stay upright on rotated views.
 *  * `'vector'`: Vector tiles are rendered as vectors. Most accurate rendering
 *    even during animations, but slower performance than the other options.
 *
 * When `declutter` is set to `true`, `'hybrid'` will be used instead of
 * `'image'`. The default is `'hybrid'`.
 * @type {ol.layer.VectorTileRenderType|string|undefined}
 * @api
 */
olx.layer.VectorTileOptions.prototype.renderMode;


/**
 * Render order. Function to be used when sorting features before rendering. By
 * default features are drawn in the order that they are created.
 * @type {ol.RenderOrderFunction|undefined}
 * @api
 */
olx.layer.VectorTileOptions.prototype.renderOrder;


/**
 * Sets the layer as overlay on a map. The map will not manage this layer in its
 * layers collection, and the layer will be rendered on top. This is useful for
 * temporary layers. The standard way to add a layer to a map and have it
 * managed by the map is to use {@link ol.Map#addLayer}.
 * @type {ol.PluggableMap|undefined}
 * @api
 */
olx.layer.VectorTileOptions.prototype.map;


/**
 * The bounding extent for layer rendering.  The layer will not be rendered
 * outside of this extent.
 * @type {ol.Extent|undefined}
 * @api
 */
olx.layer.VectorTileOptions.prototype.extent;


/**
 * The minimum resolution (inclusive) at which this layer will be visible.
 * @type {number|undefined}
 * @api
 */
olx.layer.VectorTileOptions.prototype.minResolution;


/**
 * The maximum resolution (exclusive) below which this layer will be visible.
 * @type {number|undefined}
 * @api
 */
olx.layer.VectorTileOptions.prototype.maxResolution;


/**
 * Opacity. 0-1. Default is `1`.
 * @type {number|undefined}
 * @api
 */
olx.layer.VectorTileOptions.prototype.opacity;


/**
 * Preload. Load low-resolution tiles up to `preload` levels. By default
 * `preload` is `0`, which means no preloading.
 * @type {number|undefined}
 * @api
 */
olx.layer.VectorTileOptions.prototype.preload;


/**
 * Source.
 * @type {ol.source.VectorTile|undefined}
 * @api
 */
olx.layer.VectorTileOptions.prototype.source;


/**
 * Declutter images and text. Decluttering is applied to all image and text
 * styles, and the priority is defined by the z-index of the style. Lower
 * z-index means higher priority. When set to `true`, a `renderMode` of
 * `'image'` will be overridden with `'hybrid'`. Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.layer.VectorTileOptions.prototype.declutter;


/**
 * Layer style. See {@link ol.style} for default style which will be used if
 * this is not defined.
 * @type {ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined}
 * @api
 */
olx.layer.VectorTileOptions.prototype.style;


/**
 * When set to `true`, feature batches will be recreated during animations.
 * This means that no vectors will be shown clipped, but the setting will have a
 * performance impact for large amounts of vector data. When set to `false`,
 * batches will be recreated when no animation is active.  Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.layer.VectorTileOptions.prototype.updateWhileAnimating;


/**
 * When set to `true`, feature batches will be recreated during interactions.
 * See also `updateWhileAnimating`. Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.layer.VectorTileOptions.prototype.updateWhileInteracting;


/**
 * Visibility. Default is `true` (visible).
 * @type {boolean|undefined}
 * @api
 */
olx.layer.VectorTileOptions.prototype.visible;


/**
 * The z-index for layer rendering.  At rendering time, the layers will be
 * ordered, first by Z-index and then by position. The default Z-index is 0.
 * @type {number|undefined}
 * @api
 */
olx.layer.VectorTileOptions.prototype.zIndex;


/**
 * @typedef {{context: CanvasRenderingContext2D,
 *     feature: (module:ol/Feature~Feature|ol.render.Feature),
 *     geometry: module:ol/geom/SimpleGeometry~SimpleGeometry,
 *     pixelRatio: number,
 *     resolution: number,
 *     rotation: number}}
 */
olx.render.State;


/**
 * Canvas context that the layer is being rendered to.
 * @type {CanvasRenderingContext2D}
 * @api
 */
olx.render.State.prototype.context;


/**
 * Pixel ratio used by the layer renderer.
 * @type {number}
 * @api
 */
olx.render.State.prototype.pixelRatio;


/**
 * Resolution that the render batch was created and optimized for. This is
 * not the view's resolution that is being rendered.
 * @type {number}
 * @api
 */
olx.render.State.prototype.resolution;


/**
 * Rotation of the rendered layer in radians.
 * @type {number}
 * @api
 */
olx.render.State.prototype.rotation;


/**
 * @typedef {{cacheSize: (number|undefined),
 *     culture: (string|undefined),
 *     hidpi: (boolean|undefined),
 *     key: string,
 *     imagerySet: string,
 *     maxZoom: (number|undefined),
 *     reprojectionErrorThreshold: (number|undefined),
 *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *     wrapX: (boolean|undefined),
 *     transition: (number|undefined)}}
 */
olx.source.BingMapsOptions;


/**
 * Cache size. Default is `2048`.
 * @type {number|undefined}
 * @api
 */
olx.source.BingMapsOptions.prototype.cacheSize;


/**
 * If `true` hidpi tiles will be requested. Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.BingMapsOptions.prototype.hidpi;


/**
 * Culture code. Default is `en-us`.
 * @type {string|undefined}
 * @api
 */
olx.source.BingMapsOptions.prototype.culture;


/**
 * Bing Maps API key. Get yours at http://www.bingmapsportal.com/.
 * @type {string}
 * @api
 */
olx.source.BingMapsOptions.prototype.key;


/**
 * Type of imagery.
 * @type {string}
 * @api
 */
olx.source.BingMapsOptions.prototype.imagerySet;


/**
 * Max zoom. Default is what's advertized by the BingMaps service (`21`
 * currently).
 * @type {number|undefined}
 * @api
 */
olx.source.BingMapsOptions.prototype.maxZoom;


/**
 * Maximum allowed reprojection error (in pixels). Default is `0.5`.
 * Higher values can increase reprojection performance, but decrease precision.
 * @type {number|undefined}
 * @api
 */
olx.source.BingMapsOptions.prototype.reprojectionErrorThreshold;


/**
 * Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @type {ol.TileLoadFunctionType|undefined}
 * @api
 */
olx.source.BingMapsOptions.prototype.tileLoadFunction;


/**
 * Whether to wrap the world horizontally. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.BingMapsOptions.prototype.wrapX;


/**
 * Duration of the opacity transition for rendering.  To disable the opacity
 * transition, pass `transition: 0`.
 * @type {number|undefined}
 * @api
 */
olx.source.BingMapsOptions.prototype.transition;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined),
 *     distance: (number|undefined),
 *     extent: (ol.Extent|undefined),
 *     format: (ol.format.Feature|undefined),
 *     geometryFunction: (undefined|function(module:ol/Feature~Feature):module:ol/geom/Point~Point),
 *     projection: ol.ProjectionLike,
 *     source: ol.source.Vector,
 *     wrapX: (boolean|undefined)}}
 */
olx.source.ClusterOptions;


/**
 * Attributions.
 * @type {ol.AttributionLike|undefined}
 * @api
 */
olx.source.ClusterOptions.prototype.attributions;


/**
 * Minimum distance in pixels between clusters. Default is `20`.
 * @type {number|undefined}
 * @api
 */
olx.source.ClusterOptions.prototype.distance;


/**
 * Extent.
 * @type {ol.Extent|undefined}
 * @api
 */
olx.source.ClusterOptions.prototype.extent;


/**
 * Function that takes an {@link module:ol/Feature~Feature} as argument and returns an
 * {@link module:ol/geom/Point~Point} as cluster calculation point for the feature. When a
 * feature should not be considered for clustering, the function should return
 * `null`. The default, which works when the underyling source contains point
 * features only, is
 * ```js
 * function(feature) {
 *   return feature.getGeometry();
 * }
 * ```
 * See {@link module:ol/geom/Polygon~Polygon#getInteriorPoint} for a way to get a cluster
 * calculation point for polygons.
 * @type {undefined|function(module:ol/Feature~Feature):module:ol/geom/Point~Point}
 * @api
 */
olx.source.ClusterOptions.prototype.geometryFunction;


/**
 * Format.
 * @type {ol.format.Feature|undefined}
 * @api
 */
olx.source.ClusterOptions.prototype.format;


/**
 * Projection.
 * @type {ol.ProjectionLike}
 * @api
 */
olx.source.ClusterOptions.prototype.projection;


/**
 * Source.
 * @type {ol.source.Vector}
 * @api
 */
olx.source.ClusterOptions.prototype.source;


/**
 * WrapX. Default is true
 * @type {boolean|undefined}
 * @api
 */
olx.source.ClusterOptions.prototype.wrapX;


/**
 * @typedef {{preemptive: (boolean|undefined),
 *     jsonp: (boolean|undefined),
 *     tileJSON: (TileJSON|undefined),
 *     url: (string|undefined)}}
 */
olx.source.TileUTFGridOptions;


/**
 * Use JSONP with callback to load the TileJSON. Useful when the server
 * does not support CORS. Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.TileUTFGridOptions.prototype.jsonp;


/**
 * If `true` the TileUTFGrid source loads the tiles based on their "visibility".
 * This improves the speed of response, but increases traffic.
 * Note that if set to `false`, you need to pass `true` as `opt_request`
 * to the `forDataAtCoordinateAndResolution` method otherwise no data
 * will ever be loaded.
 * Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.TileUTFGridOptions.prototype.preemptive;


/**
 * TileJSON configuration for this source. If not provided, `url` must be
 * configured.
 * @type {TileJSON|undefined}
 * @api
 */
olx.source.TileUTFGridOptions.prototype.tileJSON;


/**
 * TileJSON endpoint that provides the configuration for this source. Request
 * will be made through JSONP. If not provided, `tileJSON` must be configured.
 * @type {string|undefined}
 * @api
 */
olx.source.TileUTFGridOptions.prototype.url;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined),
 *            cacheSize: (number|undefined),
 *            crossOrigin: (null|string|undefined),
 *            opaque: (boolean|undefined),
 *            projection: ol.ProjectionLike,
 *            reprojectionErrorThreshold: (number|undefined),
 *            state: (ol.source.State|undefined),
 *            tileClass: (function(new: ol.ImageTile, ol.TileCoord,
 *                                 ol.TileState, string, ?string,
 *                                 ol.TileLoadFunctionType)|undefined),
 *            tileGrid: (ol.tilegrid.TileGrid|undefined),
 *            tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *            tilePixelRatio: (number|undefined),
 *            tileUrlFunction: (ol.TileUrlFunctionType|undefined),
 *            url: (string|undefined),
 *            urls: (Array.<string>|undefined),
 *            wrapX: (boolean|undefined),
 *            transition: (number|undefined)}}
 */
olx.source.TileImageOptions;


/**
 * Attributions.
 * @type {ol.AttributionLike|undefined}
 * @api
 */
olx.source.TileImageOptions.prototype.attributions;


/**
 * Cache size. Default is `2048`.
 * @type {number|undefined}
 * @api
 */
olx.source.TileImageOptions.prototype.cacheSize;


/**
 * The `crossOrigin` attribute for loaded images.  Note that you must provide a
 * `crossOrigin` value if you are using the WebGL renderer or if you want to
 * access pixel data with the Canvas renderer.  See
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image}
 * for more detail.
 * @type {null|string|undefined}
 * @api
 */
olx.source.TileImageOptions.prototype.crossOrigin;


/**
 * Whether the layer is opaque.
 * @type {boolean|undefined}
 * @api
 */
olx.source.TileImageOptions.prototype.opaque;


/**
 * Projection.
 * @type {ol.ProjectionLike}
 * @api
 */
olx.source.TileImageOptions.prototype.projection;


/**
 * Maximum allowed reprojection error (in pixels). Default is `0.5`.
 * Higher values can increase reprojection performance, but decrease precision.
 * @type {number|undefined}
 * @api
 */
olx.source.TileImageOptions.prototype.reprojectionErrorThreshold;


/**
 * Source state.
 * @type {ol.source.State|undefined}
 * @api
 */
olx.source.TileImageOptions.prototype.state;


/**
 * Class used to instantiate image tiles. Default is {@link ol.ImageTile}.
 * @type {function(new: ol.ImageTile, ol.TileCoord,
 *                 ol.TileState, string, ?string,
 *                 ol.TileLoadFunctionType)|undefined}
 * @api
 */
olx.source.TileImageOptions.prototype.tileClass;


/**
 * Tile grid.
 * @type {ol.tilegrid.TileGrid|undefined}
 * @api
 */
olx.source.TileImageOptions.prototype.tileGrid;


/**
 * Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @type {ol.TileLoadFunctionType|undefined}
 * @api
 */
olx.source.TileImageOptions.prototype.tileLoadFunction;


/**
 * The pixel ratio used by the tile service. For example, if the tile
 * service advertizes 256px by 256px tiles but actually sends 512px
 * by 512px images (for retina/hidpi devices) then `tilePixelRatio`
 * should be set to `2`. Default is `1`.
 * @type {number|undefined}
 * @api
 */
olx.source.TileImageOptions.prototype.tilePixelRatio;


/**
 * Optional function to get tile URL given a tile coordinate and the projection.
 * @type {ol.TileUrlFunctionType|undefined}
 * @api
 */
olx.source.TileImageOptions.prototype.tileUrlFunction;


/**
 * URL template. Must include `{x}`, `{y}` or `{-y}`, and `{z}` placeholders.
 * A `{?-?}` template pattern, for example `subdomain{a-f}.domain.com`, may be
 * used instead of defining each one separately in the `urls` option.
 * @type {string|undefined}
 * @api
 */
olx.source.TileImageOptions.prototype.url;


/**
 * An array of URL templates.
 * @type {Array.<string>|undefined}
 * @api
 */
olx.source.TileImageOptions.prototype.urls;


/**
 * Whether to wrap the world horizontally. The default, `undefined`, is to
 * request out-of-bounds tiles from the server. When set to `false`, only one
 * world will be rendered. When set to `true`, tiles will be requested for one
 * world only, but they will be wrapped horizontally to render multiple worlds.
 * @type {boolean|undefined}
 * @api
 */
olx.source.TileImageOptions.prototype.wrapX;


/**
 * Duration of the opacity transition for rendering.  To disable the opacity
 * transition, pass `transition: 0`.
 * @type {number|undefined}
 * @api
 */
olx.source.TileImageOptions.prototype.transition;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined),
 *            cacheSize: (number|undefined),
 *            format: (ol.format.Feature|undefined),
 *            overlaps: (boolean|undefined),
 *            projection: ol.ProjectionLike,
 *            state: (ol.source.State|undefined),
 *            tileClass: (function(new: ol.VectorTile, ol.TileCoord,
 *                 ol.TileState, string, ol.format.Feature,
 *                 ol.TileLoadFunctionType)|undefined),
 *            tileGrid: (ol.tilegrid.TileGrid|undefined),
 *            tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *            tileUrlFunction: (ol.TileUrlFunctionType|undefined),
 *            url: (string|undefined),
 *            urls: (Array.<string>|undefined),
 *            wrapX: (boolean|undefined),
 *            transition: (number|undefined)}}
 */
olx.source.VectorTileOptions;


/**
 * Attributions.
 * @type {ol.AttributionLike|undefined}
 * @api
 */
olx.source.VectorTileOptions.prototype.attributions;


/**
 * Cache size. Default is `128`.
 * @type {number|undefined}
 * @api
 */
olx.source.VectorTileOptions.prototype.cacheSize;


/**
 * Feature format for tiles. Used and required by the default
 * `tileLoadFunction`.
 * @type {ol.format.Feature|undefined}
 * @api
 */
olx.source.VectorTileOptions.prototype.format;


/**
 * This source may have overlapping geometries. Default is `true`. Setting this
 * to `false` (e.g. for sources with polygons that represent administrative
 * boundaries or TopoJSON sources) allows the renderer to optimise fill and
 * stroke operations.
 * @type {boolean|undefined}
 * @api
 */
olx.source.VectorTileOptions.prototype.overlaps;


/**
 * Projection.
 * @type {ol.ProjectionLike}
 * @api
 */
olx.source.VectorTileOptions.prototype.projection;


/**
 * Source state.
 * @type {ol.source.State|undefined}
 * @api
 */
olx.source.VectorTileOptions.prototype.state;


/**
 * Class used to instantiate vector tiles. Default is {@link ol.VectorTile}.
 * @type {function(new: ol.VectorTile, ol.TileCoord,
 *                 ol.TileState, string, ol.format.Feature,
 *                 ol.TileLoadFunctionType)|undefined}
 * @api
 */
olx.source.VectorTileOptions.prototype.tileClass;


/**
 * Tile grid.
 * @type {ol.tilegrid.TileGrid|undefined}
 * @api
 */
olx.source.VectorTileOptions.prototype.tileGrid;


/**
 * Optional function to load a tile given a URL. Could look like this:
 * ```js
 * function(tile, url) {
 *   tile.setLoader(function() {
 *     var data = // ... fetch data
 *     var format = tile.getFormat();
 *     tile.setFeatures(format.readFeatures(data, {
 *       // uncomment the line below for ol.format.MVT only
 *       extent: tile.getExtent(),
 *       featureProjection: map.getView().getProjection()
 *     }));
 *   };
 * });
 * ```
 * @type {ol.TileLoadFunctionType|undefined}
 * @api
 */
olx.source.VectorTileOptions.prototype.tileLoadFunction;


/**
 * Optional function to get tile URL given a tile coordinate and the projection.
 * @type {ol.TileUrlFunctionType|undefined}
 * @api
 */
olx.source.VectorTileOptions.prototype.tileUrlFunction;


/**
 * URL template. Must include `{x}`, `{y}` or `{-y}`, and `{z}` placeholders.
 * A `{?-?}` template pattern, for example `subdomain{a-f}.domain.com`, may be
 * used instead of defining each one separately in the `urls` option.
 * @type {string|undefined}
 * @api
 */
olx.source.VectorTileOptions.prototype.url;


/**
 * An array of URL templates.
 * @type {Array.<string>|undefined}
 * @api
 */
olx.source.VectorTileOptions.prototype.urls;


/**
 * Whether to wrap the world horizontally. When set to `false`, only one world
 * will be rendered. When set to `true`, tiles will be wrapped horizontally to
 * render multiple worlds. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.VectorTileOptions.prototype.wrapX;


/**
 * Duration of the opacity transition for rendering.  To disable the opacity
 * transition, pass `transition: 0`.
 * @type {number|undefined}
 * @api
 */
olx.source.VectorTileOptions.prototype.transition;


/**
 * @typedef {{url: (string|undefined),
 *     displayDpi: (number|undefined),
 *     metersPerUnit: (number|undefined),
 *     hidpi: (boolean|undefined),
 *     useOverlay: (boolean|undefined),
 *     projection: ol.ProjectionLike,
 *     ratio: (number|undefined),
 *     resolutions: (Array.<number>|undefined),
 *     imageLoadFunction: (ol.ImageLoadFunctionType|undefined),
 *     params: (Object|undefined)}}
 */
olx.source.ImageMapGuideOptions;


/**
 * The mapagent url.
 * @type {string|undefined}
 * @api
 */
olx.source.ImageMapGuideOptions.prototype.url;


/**
 * The display resolution. Default is `96`.
 * @type {number|undefined}
 * @api
 */
olx.source.ImageMapGuideOptions.prototype.displayDpi;


/**
 * The meters-per-unit value. Default is `1`.
 * @type {number|undefined}
 * @api
 */
olx.source.ImageMapGuideOptions.prototype.metersPerUnit;


/**
 * Use the `ol.Map#pixelRatio` value when requesting the image from the remote
 * server. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.ImageMapGuideOptions.prototype.hidpi;


/**
 * If `true`, will use `GETDYNAMICMAPOVERLAYIMAGE`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.ImageMapGuideOptions.prototype.useOverlay;


/**
 * Projection.
 * @type {ol.ProjectionLike}
 * @api
 */
olx.source.ImageMapGuideOptions.prototype.projection;


/**
 * Ratio. `1` means image requests are the size of the map viewport, `2` means
 * twice the width and height of the map viewport, and so on. Must be `1` or
 * higher. Default is `1`.
 * @type {number|undefined}
 * @api
 */
olx.source.ImageMapGuideOptions.prototype.ratio;


/**
 * Resolutions. If specified, requests will be made for these resolutions only.
 * @type {Array.<number>|undefined}
 * @api
 */
olx.source.ImageMapGuideOptions.prototype.resolutions;


/**
 * Optional function to load an image given a URL.
 * @type {ol.ImageLoadFunctionType|undefined}
 * @api
 */
olx.source.ImageMapGuideOptions.prototype.imageLoadFunction;


/**
 * Additional parameters.
 * @type {Object|undefined}
 * @api
 */
olx.source.ImageMapGuideOptions.prototype.params;


/**
 * @typedef {{cacheSize: (number|undefined),
 *     layer: string,
 *     reprojectionErrorThreshold: (number|undefined),
 *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *     url: (string|undefined)}}
 */
olx.source.MapQuestOptions;


/**
 * Cache size. Default is `2048`.
 * @type {number|undefined}
 * @api
 */
olx.source.MapQuestOptions.prototype.cacheSize;


/**
 * Layer. Possible values are `osm`, `sat`, and `hyb`.
 * @type {string}
 * @api
 */
olx.source.MapQuestOptions.prototype.layer;


/**
 * Maximum allowed reprojection error (in pixels). Default is `0.5`.
 * Higher values can increase reprojection performance, but decrease precision.
 * @type {number|undefined}
 * @api
 */
olx.source.MapQuestOptions.prototype.reprojectionErrorThreshold;


/**
 * Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @type {ol.TileLoadFunctionType|undefined}
 * @api
 */
olx.source.MapQuestOptions.prototype.tileLoadFunction;


/**
 * URL template. Must include `{x}`, `{y}` or `{-y}`, and `{z}` placeholders.
 * @type {string|undefined}
 * @api
 */
olx.source.MapQuestOptions.prototype.url;


/**
 * @typedef {{projection: ol.ProjectionLike,
 *     tileGrid: (ol.tilegrid.TileGrid|undefined),
 *     wrapX: (boolean|undefined)}}
 */
olx.source.TileDebugOptions;


/**
 * Projection.
 * @type {ol.ProjectionLike}
 * @api
 */
olx.source.TileDebugOptions.prototype.projection;


/**
 * Tile grid.
 * @type {ol.tilegrid.TileGrid|undefined}
 * @api
 */
olx.source.TileDebugOptions.prototype.tileGrid;


/**
 * Whether to wrap the world horizontally. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.TileDebugOptions.prototype.wrapX;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined),
 *     cacheSize: (number|undefined),
 *     crossOrigin: (null|string|undefined),
 *     maxZoom: (number|undefined),
 *     opaque: (boolean|undefined),
 *     reprojectionErrorThreshold: (number|undefined),
 *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *     url: (string|undefined),
 *     wrapX: (boolean|undefined)}}
 */
olx.source.OSMOptions;


/**
 * Attributions.
 * @type {ol.AttributionLike|undefined}
 * @api
 */
olx.source.OSMOptions.prototype.attributions;


/**
 * Cache size. Default is `2048`.
 * @type {number|undefined}
 * @api
 */
olx.source.OSMOptions.prototype.cacheSize;


/**
 * The `crossOrigin` attribute for loaded images.  Note that you must provide a
 * `crossOrigin` value if you are using the WebGL renderer or if you want to
 * access pixel data with the Canvas renderer.  See
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image}
 * for more detail.
 *
 * Default is `anonymous`.
 * @type {null|string|undefined}
 * @api
 */
olx.source.OSMOptions.prototype.crossOrigin;


/**
 * Max zoom. Default is `19`.
 * @type {number|undefined}
 * @api
 */
olx.source.OSMOptions.prototype.maxZoom;


/**
 * Whether the layer is opaque. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.OSMOptions.prototype.opaque;


/**
 * Maximum allowed reprojection error (in pixels). Default is `0.5`.
 * Higher values can increase reprojection performance, but decrease precision.
 * @type {number|undefined}
 * @api
 */
olx.source.OSMOptions.prototype.reprojectionErrorThreshold;


/**
 * Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @type {ol.TileLoadFunctionType|undefined}
 * @api
 */
olx.source.OSMOptions.prototype.tileLoadFunction;


/**
 * URL template. Must include `{x}`, `{y}` or `{-y}`, and `{z}` placeholders.
 * Default is `https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png`.
 * @type {string|undefined}
 * @api
 */
olx.source.OSMOptions.prototype.url;


/**
 * Whether to wrap the world horizontally. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.OSMOptions.prototype.wrapX;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined),
 *     crossOrigin: (null|string|undefined),
 *     hidpi: (boolean|undefined),
 *     imageLoadFunction: (ol.ImageLoadFunctionType|undefined),
 *     params: Object.<string,*>,
 *     projection: ol.ProjectionLike,
 *     ratio: (number|undefined),
 *     resolutions: (Array.<number>|undefined),
 *     url: (string|undefined)}}
 */
olx.source.ImageArcGISRestOptions;


/**
 * Attributions.
 * @type {ol.AttributionLike|undefined}
 * @api
 */
olx.source.ImageArcGISRestOptions.prototype.attributions;


/**
 * The `crossOrigin` attribute for loaded images.  Note that you must provide a
 * `crossOrigin` value if you are using the WebGL renderer or if you want to
 * access pixel data with the Canvas renderer.  See
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image}
 * for more detail.
 * @type {null|string|undefined}
 * @api
 */
olx.source.ImageArcGISRestOptions.prototype.crossOrigin;


/**
 * Use the `ol.Map#pixelRatio` value when requesting the image from the remote
 * server. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.ImageArcGISRestOptions.prototype.hidpi;


/**
 * Optional function to load an image given a URL.
 * @type {ol.ImageLoadFunctionType|undefined}
 * @api
 */
olx.source.ImageArcGISRestOptions.prototype.imageLoadFunction;


/**
 * ArcGIS Rest parameters. This field is optional. Service defaults will be
 * used for any fields not specified. `FORMAT` is `PNG32` by default. `F` is `IMAGE` by
 * default. `TRANSPARENT` is `true` by default.  `BBOX, `SIZE`, `BBOXSR`,
 * and `IMAGESR` will be set dynamically. Set `LAYERS` to
 * override the default service layer visibility. See
 * {@link http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Export_Map/02r3000000v7000000/}
 * for further reference.
 * @type {Object.<string,*>|undefined}
 * @api
 */
olx.source.ImageArcGISRestOptions.prototype.params;


/**
 * Projection.
 * @type {ol.ProjectionLike}
 * @api
 */
olx.source.ImageArcGISRestOptions.prototype.projection;


/**
 * Ratio. `1` means image requests are the size of the map viewport, `2` means
 * twice the size of the map viewport, and so on. Default is `1.5`.
 * @type {number|undefined}
 * @api
 */
olx.source.ImageArcGISRestOptions.prototype.ratio;


/**
 * Resolutions. If specified, requests will be made for these resolutions only.
 * @type {Array.<number>|undefined}
 * @api
 */
olx.source.ImageArcGISRestOptions.prototype.resolutions;


/**
 * ArcGIS Rest service URL for a Map Service or Image Service. The
 * url should include /MapServer or /ImageServer.
 * @type {string|undefined}
 * @api
 */
olx.source.ImageArcGISRestOptions.prototype.url;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined),
 *     canvasFunction: ol.CanvasFunctionType,
 *     projection: ol.ProjectionLike,
 *     ratio: (number|undefined),
 *     resolutions: (Array.<number>|undefined),
 *     state: (ol.source.State|undefined)}}
 */
olx.source.ImageCanvasOptions;


/**
 * Attributions.
 * @type {ol.AttributionLike|undefined}
 * @api
 */
olx.source.ImageCanvasOptions.prototype.attributions;


/**
 * Canvas function. The function returning the canvas element used by the source
 * as an image. The arguments passed to the function are: `{ol.Extent}` the
 * image extent, `{number}` the image resolution, `{number}` the device pixel
 * ratio, `{ol.Size}` the image size, and `{module:ol/proj/Projection~Projection}` the image
 * projection. The canvas returned by this function is cached by the source. If
 * the value returned by the function is later changed then
 * `dispatchChangeEvent` should be called on the source for the source to
 * invalidate the current cached image.
 * @type {ol.CanvasFunctionType}
 * @api
 */
olx.source.ImageCanvasOptions.prototype.canvasFunction;


/**
 * Projection.
 * @type {ol.ProjectionLike}
 * @api
 */
olx.source.ImageCanvasOptions.prototype.projection;


/**
 * Ratio. 1 means canvases are the size of the map viewport, 2 means twice the
 * width and height of the map viewport, and so on. Must be `1` or higher.
 * Default is `1.5`.
 * @type {number|undefined}
 * @api
 */
olx.source.ImageCanvasOptions.prototype.ratio;


/**
 * Resolutions. If specified, new canvases will be created for these resolutions
 * only.
 * @type {Array.<number>|undefined}
 * @api
 */
olx.source.ImageCanvasOptions.prototype.resolutions;


/**
 * Source state.
 * @type {ol.source.State|undefined}
 * @api
 */
olx.source.ImageCanvasOptions.prototype.state;


/**
 * @typedef {{sources: Array.<ol.source.Source>,
 *     operation: (ol.RasterOperation|undefined),
 *     lib: (Object|undefined),
 *     threads: (number|undefined),
 *     operationType: (ol.source.RasterOperationType|undefined)}}
 * @api
 */
olx.source.RasterOptions;


/**
 * Input sources.
 * @type {Array.<ol.source.Source>}
 * @api
 */
olx.source.RasterOptions.prototype.sources;


/**
 * Raster operation.  The operation will be called with data from input sources
 * and the output will be assigned to the raster source.
 * @type {ol.RasterOperation|undefined}
 * @api
 */
olx.source.RasterOptions.prototype.operation;


/**
 * Functions that will be made available to operations run in a worker.
 * @type {Object|undefined}
 * @api
 */
olx.source.RasterOptions.prototype.lib;


/**
 * By default, operations will be run in a single worker thread.  To avoid using
 * workers altogether, set `threads: 0`.  For pixel operations, operations can
 * be run in multiple worker threads.  Note that there is additional overhead in
 * transferring data to multiple workers, and that depending on the user's
 * system, it may not be possible to parallelize the work.
 * @type {number|undefined}
 * @api
 */
olx.source.RasterOptions.prototype.threads;


/**
 * Operation type.  Supported values are `'pixel'` and `'image'`.  By default,
 * `'pixel'` operations are assumed, and operations will be called with an
 * array of pixels from input sources.  If set to `'image'`, operations will
 * be called with an array of ImageData objects from input sources.
 * @type {ol.source.RasterOperationType|undefined}
 * @api
 */
olx.source.RasterOptions.prototype.operationType;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined),
 *     crossOrigin: (null|string|undefined),
 *     hidpi: (boolean|undefined),
 *     serverType: (ol.source.WMSServerType|string|undefined),
 *     imageLoadFunction: (ol.ImageLoadFunctionType|undefined),
 *     params: Object.<string,*>,
 *     projection: ol.ProjectionLike,
 *     ratio: (number|undefined),
 *     resolutions: (Array.<number>|undefined),
 *     url: (string|undefined)}}
 */
olx.source.ImageWMSOptions;


/**
 * Attributions.
 * @type {ol.AttributionLike|undefined}
 * @api
 */
olx.source.ImageWMSOptions.prototype.attributions;


/**
 * The `crossOrigin` attribute for loaded images.  Note that you must provide a
 * `crossOrigin` value if you are using the WebGL renderer or if you want to
 * access pixel data with the Canvas renderer.  See
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image}
 * for more detail.
 * @type {null|string|undefined}
 * @api
 */
olx.source.ImageWMSOptions.prototype.crossOrigin;


/**
 * Use the `ol.Map#pixelRatio` value when requesting the image from the remote
 * server. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.ImageWMSOptions.prototype.hidpi;


/**
 * The type of the remote WMS server: `mapserver`, `geoserver` or `qgis`. Only
 * needed if `hidpi` is `true`. Default is `undefined`.
 * @type {ol.source.WMSServerType|string|undefined}
 * @api
 */
olx.source.ImageWMSOptions.prototype.serverType;


/**
 * Optional function to load an image given a URL.
 * @type {ol.ImageLoadFunctionType|undefined}
 * @api
 */
olx.source.ImageWMSOptions.prototype.imageLoadFunction;


/**
 * WMS request parameters. At least a `LAYERS` param is required. `STYLES` is
 * `''` by default. `VERSION` is `1.3.0` by default. `WIDTH`, `HEIGHT`, `BBOX`
 * and `CRS` (`SRS` for WMS version < 1.3.0) will be set dynamically.
 * @type {Object.<string,*>}
 * @api
 */
olx.source.ImageWMSOptions.prototype.params;


/**
 * Projection.
 * @type {ol.ProjectionLike}
 * @api
 */
olx.source.ImageWMSOptions.prototype.projection;


/**
 * Ratio. `1` means image requests are the size of the map viewport, `2` means
 * twice the width and height of the map viewport, and so on. Must be `1` or
 * higher. Default is `1.5`.
 * @type {number|undefined}
 * @api
 */
olx.source.ImageWMSOptions.prototype.ratio;


/**
 * Resolutions. If specified, requests will be made for these resolutions only.
 * @type {Array.<number>|undefined}
 * @api
 */
olx.source.ImageWMSOptions.prototype.resolutions;


/**
 * WMS service URL.
 * @type {string|undefined}
 * @api
 */
olx.source.ImageWMSOptions.prototype.url;


/**
 * @typedef {{
 *     cacheSize: (number|undefined),
 *     layer: string,
 *     minZoom: (number|undefined),
 *     maxZoom: (number|undefined),
 *     opaque: (boolean|undefined),
 *     reprojectionErrorThreshold: (number|undefined),
 *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *     url: (string|undefined),
 *     wrapX: (boolean|undefined)
 * }}
 */
olx.source.StamenOptions;


/**
 * Cache size. Default is `2048`.
 * @type {number|undefined}
 * @api
 */
olx.source.StamenOptions.prototype.cacheSize;

/**
 * Layer.
 * @type {string}
 * @api
 */
olx.source.StamenOptions.prototype.layer;


/**
 * Minimum zoom.
 * @type {number|undefined}
 * @api
 */
olx.source.StamenOptions.prototype.minZoom;


/**
 * Maximum zoom.
 * @type {number|undefined}
 * @api
 */
olx.source.StamenOptions.prototype.maxZoom;


/**
 * Whether the layer is opaque.
 * @type {boolean|undefined}
 * @api
 */
olx.source.StamenOptions.prototype.opaque;


/**
 * Maximum allowed reprojection error (in pixels). Default is `0.5`.
 * Higher values can increase reprojection performance, but decrease precision.
 * @type {number|undefined}
 * @api
 */
olx.source.StamenOptions.prototype.reprojectionErrorThreshold;


/**
 * Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @type {ol.TileLoadFunctionType|undefined}
 * @api
 */
olx.source.StamenOptions.prototype.tileLoadFunction;


/**
 * URL template. Must include `{x}`, `{y}` or `{-y}`, and `{z}` placeholders.
 * @type {string|undefined}
 * @api
 */
olx.source.StamenOptions.prototype.url;


/**
 * Whether to wrap the world horizontally. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.StamenOptions.prototype.wrapX;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined),
 *     crossOrigin: (null|string|undefined),
 *     imageExtent: (ol.Extent),
 *     imageLoadFunction: (ol.ImageLoadFunctionType|undefined),
 *     imageSize: (ol.Size|undefined),
 *     projection: ol.ProjectionLike,
 *     url: string}}
 */
olx.source.ImageStaticOptions;


/**
 * Attributions.
 * @type {ol.AttributionLike|undefined}
 * @api
 */
olx.source.ImageStaticOptions.prototype.attributions;


/**
 * The `crossOrigin` attribute for loaded images.  Note that you must provide a
 * `crossOrigin` value if you are using the WebGL renderer or if you want to
 * access pixel data with the Canvas renderer.  See
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image}
 * for more detail.
 * @type {null|string|undefined}
 * @api
 */
olx.source.ImageStaticOptions.prototype.crossOrigin;


/**
 * Extent of the image in map coordinates.  This is the [left, bottom, right,
 * top] map coordinates of your image.
 * @type {ol.Extent}
 * @api
 */
olx.source.ImageStaticOptions.prototype.imageExtent;


/**
 * Optional function to load an image given a URL.
 * @type {ol.ImageLoadFunctionType|undefined}
 * @api
 */
olx.source.ImageStaticOptions.prototype.imageLoadFunction;


/**
 * Projection.
 * @type {ol.ProjectionLike}
 * @api
 */
olx.source.ImageStaticOptions.prototype.projection;


/**
 * Size of the image in pixels. Usually the image size is auto-detected, so this
 * only needs to be set if auto-detection fails for some reason.
 * @type {ol.Size|undefined}
 * @api
 */
olx.source.ImageStaticOptions.prototype.imageSize;


/**
 * Image URL.
 * @type {string}
 * @api
 */
olx.source.ImageStaticOptions.prototype.url;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined),
 *     cacheSize: (number|undefined),
 *     crossOrigin: (null|string|undefined),
 *     params: (Object.<string, *>|undefined),
 *     tileGrid: (ol.tilegrid.TileGrid|undefined),
 *     projection: ol.ProjectionLike,
 *     reprojectionErrorThreshold: (number|undefined),
 *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *     url: (string|undefined),
 *     urls: (Array.<string>|undefined),
 *     wrapX: (boolean|undefined),
 *     transition: (number|undefined)}}
 */
olx.source.TileArcGISRestOptions;


/**
 * Attributions.
 * @type {ol.AttributionLike|undefined}
 * @api
 */
olx.source.TileArcGISRestOptions.prototype.attributions;


/**
 * Cache size. Default is `2048`.
 * @type {number|undefined}
 * @api
 */
olx.source.TileArcGISRestOptions.prototype.cacheSize;


/**
 * The `crossOrigin` attribute for loaded images.  Note that you must provide a
 * `crossOrigin` value if you are using the WebGL renderer or if you want to
 * access pixel data with the Canvas renderer.  See
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image}
 * for more detail.
 * @type {null|string|undefined}
 * @api
 */
olx.source.TileArcGISRestOptions.prototype.crossOrigin;


/**
 * ArcGIS Rest parameters. This field is optional. Service defaults will be
 * used for any fields not specified. `FORMAT` is `PNG32` by default. `F` is `IMAGE` by
 * default. `TRANSPARENT` is `true` by default.  `BBOX, `SIZE`, `BBOXSR`,
 * and `IMAGESR` will be set dynamically. Set `LAYERS` to
 * override the default service layer visibility. See
 * {@link http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Export_Map/02r3000000v7000000/}
 * for further reference.
 * @type {Object.<string,*>|undefined}
 * @api
 */
olx.source.TileArcGISRestOptions.prototype.params;


/**
 * Tile grid. Base this on the resolutions, tilesize and extent supported by the
 * server.
 * If this is not defined, a default grid will be used: if there is a projection
 * extent, the grid will be based on that; if not, a grid based on a global
 * extent with origin at 0,0 will be used.
 * @type {ol.tilegrid.TileGrid|undefined}
 * @api
 */
olx.source.TileArcGISRestOptions.prototype.tileGrid;


/**
 * Projection.
 * @type {ol.ProjectionLike}
 * @api
 */
olx.source.TileArcGISRestOptions.prototype.projection;


/**
 * Maximum allowed reprojection error (in pixels). Default is `0.5`.
 * Higher values can increase reprojection performance, but decrease precision.
 * @type {number|undefined}
 * @api
 */
olx.source.TileArcGISRestOptions.prototype.reprojectionErrorThreshold;


/**
 * Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @type {ol.TileLoadFunctionType|undefined}
 * @api
 */
olx.source.TileArcGISRestOptions.prototype.tileLoadFunction;


/**
 * ArcGIS Rest service URL for a Map Service or Image Service. The
 * url should include /MapServer or /ImageServer.
 * @type {string|undefined}
 * @api
 */
olx.source.TileArcGISRestOptions.prototype.url;


/**
 * Whether to wrap the world horizontally. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.TileArcGISRestOptions.prototype.wrapX;


/**
 * Duration of the opacity transition for rendering.  To disable the opacity
 * transition, pass `transition: 0`.
 * @type {number|undefined}
 * @api
 */
olx.source.TileArcGISRestOptions.prototype.transition;


/**
 * ArcGIS Rest service urls. Use this instead of `url` when the ArcGIS Service supports multiple
 * urls for export requests.
 * @type {Array.<string>|undefined}
 * @api
 */
olx.source.TileArcGISRestOptions.prototype.urls;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined),
 *     cacheSize: (number|undefined),
 *     crossOrigin: (null|string|undefined),
 *     jsonp: (boolean|undefined),
 *     reprojectionErrorThreshold: (number|undefined),
 *     tileJSON: (TileJSON|undefined),
 *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *     url: (string|undefined),
 *     wrapX: (boolean|undefined),
 *     transition: (number|undefined)}}
 */
olx.source.TileJSONOptions;


/**
 * Optional attributions for the source.  If provided, these will be used
 * instead of any attribution data advertised by the server.  If not provided,
 * any attributions advertised by the server will be used.
 * @type {ol.AttributionLike|undefined}
 * @api
 */
olx.source.TileJSONOptions.prototype.attributions;


/**
 * Cache size. Default is `2048`.
 * @type {number|undefined}
 * @api
 */
olx.source.TileJSONOptions.prototype.cacheSize;


/**
 * The `crossOrigin` attribute for loaded images.  Note that you must provide a
 * `crossOrigin` value if you are using the WebGL renderer or if you want to
 * access pixel data with the Canvas renderer.  See
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image}
 * for more detail.
 * @type {null|string|undefined}
 * @api
 */
olx.source.TileJSONOptions.prototype.crossOrigin;


/**
 * Use JSONP with callback to load the TileJSON. Useful when the server
 * does not support CORS. Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.TileJSONOptions.prototype.jsonp;


/**
 * Maximum allowed reprojection error (in pixels). Default is `0.5`.
 * Higher values can increase reprojection performance, but decrease precision.
 * @type {number|undefined}
 * @api
 */
olx.source.TileJSONOptions.prototype.reprojectionErrorThreshold;


/**
 * TileJSON configuration for this source. If not provided, `url` must be
 * configured.
 * @type {TileJSON|undefined}
 * @api
 */
olx.source.TileJSONOptions.prototype.tileJSON;


/**
 * Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @type {ol.TileLoadFunctionType|undefined}
 * @api
 */
olx.source.TileJSONOptions.prototype.tileLoadFunction;


/**
 * URL to the TileJSON file. If not provided, `tileJSON` must be configured.
 * @type {string|undefined}
 * @api
 */
olx.source.TileJSONOptions.prototype.url;


/**
 * Whether to wrap the world horizontally. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.TileJSONOptions.prototype.wrapX;


/**
 * Duration of the opacity transition for rendering.  To disable the opacity
 * transition, pass `transition: 0`.
 * @type {number|undefined}
 * @api
 */
olx.source.TileJSONOptions.prototype.transition;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined),
 *     cacheSize: (number|undefined),
 *     params: Object.<string,*>,
 *     crossOrigin: (null|string|undefined),
 *     gutter: (number|undefined),
 *     hidpi: (boolean|undefined),
 *     tileClass: (function(new: ol.ImageTile, ol.TileCoord,
 *                          ol.TileState, string, ?string,
 *                          ol.TileLoadFunctionType)|undefined),
 *     tileGrid: (ol.tilegrid.TileGrid|undefined),
 *     projection: ol.ProjectionLike,
 *     reprojectionErrorThreshold: (number|undefined),
 *     serverType: (ol.source.WMSServerType|string|undefined),
 *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *     url: (string|undefined),
 *     urls: (Array.<string>|undefined),
 *     wrapX: (boolean|undefined),
 *     transition: (number|undefined)}}
 */
olx.source.TileWMSOptions;


/**
 * Attributions.
 * @type {ol.AttributionLike|undefined}
 * @api
 */
olx.source.TileWMSOptions.prototype.attributions;


/**
 * Cache size. Default is `2048`.
 * @type {number|undefined}
 * @api
 */
olx.source.TileWMSOptions.prototype.cacheSize;


/**
 * WMS request parameters. At least a `LAYERS` param is required. `STYLES` is
 * `''` by default. `VERSION` is `1.3.0` by default. `WIDTH`, `HEIGHT`, `BBOX`
 * and `CRS` (`SRS` for WMS version < 1.3.0) will be set dynamically.
 * @type {Object.<string,*>}
 * @api
 */
olx.source.TileWMSOptions.prototype.params;


/**
 * The `crossOrigin` attribute for loaded images.  Note that you must provide a
 * `crossOrigin` value if you are using the WebGL renderer or if you want to
 * access pixel data with the Canvas renderer.  See
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image}
 * for more detail.
 * @type {null|string|undefined}
 * @api
 */
olx.source.TileWMSOptions.prototype.crossOrigin;


/**
 * The size in pixels of the gutter around image tiles to ignore. By setting
 * this property to a non-zero value, images will be requested that are wider
 * and taller than the tile size by a value of `2 x gutter`. Defaults to zero.
 * Using a non-zero value allows artifacts of rendering at tile edges to be
 * ignored. If you control the WMS service it is recommended to address
 * "artifacts at tile edges" issues by properly configuring the WMS service. For
 * example, MapServer has a `tile_map_edge_buffer` configuration parameter for
 * this. See http://mapserver.org/output/tile_mode.html.
 * @type {number|undefined}
 * @api
 */
olx.source.TileWMSOptions.prototype.gutter;


/**
 * Use the `ol.Map#pixelRatio` value when requesting the image from the remote
 * server. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.TileWMSOptions.prototype.hidpi;


/**
 * Class used to instantiate image tiles. Default is {@link ol.ImageTile}.
 * @type {function(new: ol.ImageTile, ol.TileCoord,
 *                 ol.TileState, string, ?string,
 *                 ol.TileLoadFunctionType)|undefined}
 * @api
 */
olx.source.TileWMSOptions.prototype.tileClass;


/**
 * Tile grid. Base this on the resolutions, tilesize and extent supported by the
 * server.
 * If this is not defined, a default grid will be used: if there is a projection
 * extent, the grid will be based on that; if not, a grid based on a global
 * extent with origin at 0,0 will be used.
 * @type {ol.tilegrid.TileGrid|undefined}
 * @api
 */
olx.source.TileWMSOptions.prototype.tileGrid;


/**
 * Projection.
 * @type {ol.ProjectionLike}
 * @api
 */
olx.source.TileWMSOptions.prototype.projection;


/**
 * Maximum allowed reprojection error (in pixels). Default is `0.5`.
 * Higher values can increase reprojection performance, but decrease precision.
 * @type {number|undefined}
 * @api
 */
olx.source.TileWMSOptions.prototype.reprojectionErrorThreshold;


/**
 * The type of the remote WMS server. Currently only used when `hidpi` is
 * `true`. Default is `undefined`.
 * @type {ol.source.WMSServerType|string|undefined}
 * @api
 */
olx.source.TileWMSOptions.prototype.serverType;


/**
 * Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @type {ol.TileLoadFunctionType|undefined}
 * @api
 */
olx.source.TileWMSOptions.prototype.tileLoadFunction;


/**
 * WMS service URL.
 * @type {string|undefined}
 * @api
 */
olx.source.TileWMSOptions.prototype.url;


/**
 * WMS service urls. Use this instead of `url` when the WMS supports multiple
 * urls for GetMap requests.
 * @type {Array.<string>|undefined}
 * @api
 */
olx.source.TileWMSOptions.prototype.urls;


/**
 * Whether to wrap the world horizontally. When set to `false`, only one world
 * will be rendered. When `true`, tiles will be requested for one world only,
 * but they will be wrapped horizontally to render multiple worlds. The default
 * is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.TileWMSOptions.prototype.wrapX;


/**
 * Duration of the opacity transition for rendering.  To disable the opacity
 * transition, pass `transition: 0`.
 * @type {number|undefined}
 * @api
 */
olx.source.TileWMSOptions.prototype.transition;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined),
 *     features: (Array.<module:ol/Feature~Feature>|ol.Collection.<module:ol/Feature~Feature>|undefined),
 *     format: (ol.format.Feature|undefined),
 *     loader: (module:ol/Feature~FeatureLoader|undefined),
 *     overlaps: (boolean|undefined),
 *     strategy: (ol.LoadingStrategy|undefined),
 *     url: (string|module:ol/Feature~FeatureUrlFunction|undefined),
 *     useSpatialIndex: (boolean|undefined),
 *     wrapX: (boolean|undefined)}}
 */
olx.source.VectorOptions;


/**
 * Attributions.
 * @type {ol.AttributionLike|undefined}
 * @api
 */
olx.source.VectorOptions.prototype.attributions;


/**
 * Features. If provided as {@link ol.Collection}, the features in the source
 * and the collection will stay in sync.
 * @type {Array.<module:ol/Feature~Feature>|ol.Collection.<module:ol/Feature~Feature>|undefined}
 * @api
 */
olx.source.VectorOptions.prototype.features;


/**
 * The feature format used by the XHR feature loader when `url` is set.
 * Required if `url` is set, otherwise ignored. Default is `undefined`.
 * @type {ol.format.Feature|undefined}
 * @api
 */
olx.source.VectorOptions.prototype.format;


/**
 * The loader function used to load features, from a remote source for example.
 * If this is not set and `url` is set, the source will create and use an XHR
 * feature loader.
 *
 * Example:
 *
 * ```js
 * var vectorSource = new ol.source.Vector({
 *   format: new ol.format.GeoJSON(),
 *   loader: function(extent, resolution, projection) {
 *      var proj = projection.getCode();
 *      var url = 'https://ahocevar.com/geoserver/wfs?service=WFS&' +
 *          'version=1.1.0&request=GetFeature&typename=osm:water_areas&' +
 *          'outputFormat=application/json&srsname=' + proj + '&' +
 *          'bbox=' + extent.join(',') + ',' + proj;
 *      var xhr = new XMLHttpRequest();
 *      xhr.open('GET', url);
 *      var onError = function() {
 *        vectorSource.removeLoadedExtent(extent);
 *      }
 *      xhr.onerror = onError;
 *      xhr.onload = function() {
 *        if (xhr.status == 200) {
 *          vectorSource.addFeatures(
 *              vectorSource.getFormat().readFeatures(xhr.responseText));
 *        } else {
 *          onError();
 *        }
 *      }
 *      xhr.send();
 *    },
 *    strategy: ol.loadingstrategy.bbox
 *  });
 * ```
 * @type {module:ol/Feature~FeatureLoader|undefined}
 * @api
 */
olx.source.VectorOptions.prototype.loader;


/**
 * This source may have overlapping geometries. Default is `true`. Setting this
 * to `false` (e.g. for sources with polygons that represent administrative
 * boundaries or TopoJSON sources) allows the renderer to optimise fill and
 * stroke operations.
 * @type {boolean|undefined}
 * @api
 */
olx.source.VectorOptions.prototype.overlaps;


/**
 * The loading strategy to use. By default an {@link ol.loadingstrategy.all}
 * strategy is used, a one-off strategy which loads all features at once.
 * @type {ol.LoadingStrategy|undefined}
 * @api
 */
olx.source.VectorOptions.prototype.strategy;


/**
 * Setting this option instructs the source to load features using an XHR loader
 * (see {@link ol.featureloader.xhr}). Use a `string` and an
 * {@link ol.loadingstrategy.all} for a one-off download of all features from
 * the given URL. Use a {@link module:ol/Feature~FeatureUrlFunction} to generate the url with
 * other loading strategies.
 * Requires `format` to be set as well.
 * When default XHR feature loader is provided, the features will
 * be transformed from the data projection to the view projection
 * during parsing. If your remote data source does not advertise its projection
 * properly, this transformation will be incorrect. For some formats, the
 * default projection (usually EPSG:4326) can be overridden by setting the
 * defaultDataProjection constructor option on the format.
 * Note that if a source contains non-feature data, such as a GeoJSON geometry
 * or a KML NetworkLink, these will be ignored. Use a custom loader to load these.
 * @type {string|module:ol/Feature~FeatureUrlFunction|undefined}
 * @api
 */
olx.source.VectorOptions.prototype.url;


/**
 * By default, an RTree is used as spatial index. When features are removed and
 * added frequently, and the total number of features is low, setting this to
 * `false` may improve performance.
 *
 * Note that
 * {@link ol.source.Vector#getFeaturesInExtent},
 * {@link ol.source.Vector#getClosestFeatureToCoordinate} and
 * {@link ol.source.Vector#getExtent} cannot be used when `useSpatialIndex` is
 * set to `false`, and {@link ol.source.Vector#forEachFeatureInExtent} will loop
 * through all features.
 *
 * When set to `false`, the features will be maintained in an
 * {@link ol.Collection}, which can be retrieved through
 * {@link ol.source.Vector#getFeaturesCollection}.
 *
 * The default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.VectorOptions.prototype.useSpatialIndex;


/**
 * Wrap the world horizontally. Default is `true`. For vector editing across the
 * -180° and 180° meridians to work properly, this should be set to `false`. The
 * resulting geometry coordinates will then exceed the world bounds.
 * @type {boolean|undefined}
 * @api
 */
olx.source.VectorOptions.prototype.wrapX;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined),
 *     cacheSize: (number|undefined),
 *     crossOrigin: (string|null|undefined),
 *     tileGrid: ol.tilegrid.WMTS,
 *     projection: ol.ProjectionLike,
 *     reprojectionErrorThreshold: (number|undefined),
 *     requestEncoding: (ol.source.WMTSRequestEncoding|string|undefined),
 *     layer: string,
 *     style: string,
 *     tilePixelRatio: (number|undefined),
 *     version: (string|undefined),
 *     format: (string|undefined),
 *     matrixSet: string,
 *     dimensions: (!Object|undefined),
 *     url: (string|undefined),
 *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *     urls: (Array.<string>|undefined),
 *     tileClass: (function(new: ol.ImageTile, ol.TileCoord,
 *                          ol.TileState, string, ?string,
 *                          ol.TileLoadFunctionType)|undefined),
 *     wrapX: (boolean|undefined),
 *     transition: (number|undefined)}}
 */
olx.source.WMTSOptions;


/**
 * Attributions.
 * @type {ol.AttributionLike|undefined}
 * @api
 */
olx.source.WMTSOptions.prototype.attributions;


/**
 * Cache size. Default is `2048`.
 * @type {number|undefined}
 * @api
 */
olx.source.WMTSOptions.prototype.cacheSize;


/**
 * The `crossOrigin` attribute for loaded images.  Note that you must provide a
 * `crossOrigin` value if you are using the WebGL renderer or if you want to
 * access pixel data with the Canvas renderer.  See
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image}
 * for more detail.
 * @type {string|null|undefined}
 * @api
 */
olx.source.WMTSOptions.prototype.crossOrigin;


/**
 * Tile grid.
 * @type {ol.tilegrid.WMTS}
 * @api
 */
olx.source.WMTSOptions.prototype.tileGrid;


/**
 * Projection.
 * @type {ol.ProjectionLike}
 * @api
 */
olx.source.WMTSOptions.prototype.projection;


/**
 * Maximum allowed reprojection error (in pixels). Default is `0.5`.
 * Higher values can increase reprojection performance, but decrease precision.
 * @type {number|undefined}
 * @api
 */
olx.source.WMTSOptions.prototype.reprojectionErrorThreshold;


/**
 * Request encoding. Default is `KVP`.
 * @type {ol.source.WMTSRequestEncoding|string|undefined}
 * @api
 */
olx.source.WMTSOptions.prototype.requestEncoding;


/**
 * Layer name as advertised in the WMTS capabilities.
 * @type {string}
 * @api
 */
olx.source.WMTSOptions.prototype.layer;


/**
 * Style name as advertised in the WMTS capabilities.
 * @type {string}
 * @api
 */
olx.source.WMTSOptions.prototype.style;


/**
 * Class used to instantiate image tiles. Default is {@link ol.ImageTile}.
 * @type {function(new: ol.ImageTile, ol.TileCoord,
 *                 ol.TileState, string, ?string,
 *                 ol.TileLoadFunctionType)|undefined}
 * @api
 */
olx.source.WMTSOptions.prototype.tileClass;


/**
 * The pixel ratio used by the tile service. For example, if the tile
 * service advertizes 256px by 256px tiles but actually sends 512px
 * by 512px images (for retina/hidpi devices) then `tilePixelRatio`
 * should be set to `2`. Default is `1`.
 * @type {number|undefined}
 * @api
 */
olx.source.WMTSOptions.prototype.tilePixelRatio;


/**
 * WMTS version. Default is `1.0.0`.
 * @type {string|undefined}
 * @api
 */
olx.source.WMTSOptions.prototype.version;


/**
 * Image format. Default is `image/jpeg`.
 * @type {string|undefined}
 * @api
 */
olx.source.WMTSOptions.prototype.format;


/**
 * Matrix set.
 * @type {string}
 * @api
 */
olx.source.WMTSOptions.prototype.matrixSet;


/**
 * Additional "dimensions" for tile requests.  This is an object with properties
 * named like the advertised WMTS dimensions.
 * @type {!Object|undefined}
 * @api
 */
olx.source.WMTSOptions.prototype.dimensions;


/**
 * A URL for the service.  For the RESTful request encoding, this is a URL
 * template.  For KVP encoding, it is normal URL. A `{?-?}` template pattern,
 * for example `subdomain{a-f}.domain.com`, may be used instead of defining
 * each one separately in the `urls` option.
 * @type {string|undefined}
 * @api
 */
olx.source.WMTSOptions.prototype.url;


/**
 * Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @type {ol.TileLoadFunctionType|undefined}
 * @api
 */
olx.source.WMTSOptions.prototype.tileLoadFunction;


/**
 * An array of URLs.  Requests will be distributed among the URLs in this array.
 * @type {Array.<string>|undefined}
 * @api
 */
olx.source.WMTSOptions.prototype.urls;


/**
 * Whether to wrap the world horizontally. Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.WMTSOptions.prototype.wrapX;


/**
 * Duration of the opacity transition for rendering.  To disable the opacity
 * transition, pass `transition: 0`.
 * @type {number|undefined}
 * @api
 */
olx.source.WMTSOptions.prototype.transition;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined),
 *     cacheSize: (number|undefined),
 *     crossOrigin: (null|string|undefined),
 *     opaque: (boolean|undefined),
 *     projection: ol.ProjectionLike,
 *     reprojectionErrorThreshold: (number|undefined),
 *     maxZoom: (number|undefined),
 *     minZoom: (number|undefined),
 *     tileGrid: (ol.tilegrid.TileGrid|undefined),
 *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
 *     tilePixelRatio: (number|undefined),
 *     tileSize: (number|ol.Size|undefined),
 *     tileUrlFunction: (ol.TileUrlFunctionType|undefined),
 *     url: (string|undefined),
 *     urls: (Array.<string>|undefined),
 *     wrapX: (boolean|undefined),
 *     transition: (number|undefined)}}
 */
olx.source.XYZOptions;


/**
 * Attributions.
 * @type {ol.AttributionLike|undefined}
 * @api
 */
olx.source.XYZOptions.prototype.attributions;


/**
 * Cache size. Default is `2048`.
 * @type {number|undefined}
 * @api
 */
olx.source.XYZOptions.prototype.cacheSize;


/**
 * The `crossOrigin` attribute for loaded images.  Note that you must provide a
 * `crossOrigin` value if you are using the WebGL renderer or if you want to
 * access pixel data with the Canvas renderer.  See
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image}
 * for more detail.
 * @type {null|string|undefined}
 * @api
 */
olx.source.XYZOptions.prototype.crossOrigin;


/**
 * Whether the layer is opaque.
 * @type {boolean|undefined}
 * @api
 */
olx.source.XYZOptions.prototype.opaque;


/**
 * Projection. Default is `EPSG:3857`.
 * @type {ol.ProjectionLike}
 * @api
 */
olx.source.XYZOptions.prototype.projection;


/**
 * Maximum allowed reprojection error (in pixels). Default is `0.5`.
 * Higher values can increase reprojection performance, but decrease precision.
 * @type {number|undefined}
 * @api
 */
olx.source.XYZOptions.prototype.reprojectionErrorThreshold;


/**
 * Optional max zoom level. Default is `18`.
 * @type {number|undefined}
 * @api
 */
olx.source.XYZOptions.prototype.maxZoom;


/**
 * Optional min zoom level. Default is `0`.
 * @type {number|undefined}
 * @api
 */
olx.source.XYZOptions.prototype.minZoom;


/**
 * Tile grid.
 * @type {ol.tilegrid.TileGrid|undefined}
 * @api
 */
olx.source.XYZOptions.prototype.tileGrid;


/**
 * Optional function to load a tile given a URL. The default is
 * ```js
 * function(imageTile, src) {
 *   imageTile.getImage().src = src;
 * };
 * ```
 * @type {ol.TileLoadFunctionType|undefined}
 * @api
 */
olx.source.XYZOptions.prototype.tileLoadFunction;


/**
 * The pixel ratio used by the tile service. For example, if the tile
 * service advertizes 256px by 256px tiles but actually sends 512px
 * by 512px images (for retina/hidpi devices) then `tilePixelRatio`
 * should be set to `2`. Default is `1`.
 * @type {number|undefined}
 * @api
 */
olx.source.XYZOptions.prototype.tilePixelRatio;


/**
 * The tile size used by the tile service. Default is `[256, 256]` pixels.
 * @type {number|ol.Size|undefined}
 * @api
 */
olx.source.XYZOptions.prototype.tileSize;


/**
 * Optional function to get tile URL given a tile coordinate and the projection.
 * Required if url or urls are not provided.
 * @type {ol.TileUrlFunctionType|undefined}
 * @api
 */
olx.source.XYZOptions.prototype.tileUrlFunction;


/**
 * URL template. Must include `{x}`, `{y}` or `{-y}`, and `{z}` placeholders.
 * A `{?-?}` template pattern, for example `subdomain{a-f}.domain.com`, may be
 * used instead of defining each one separately in the `urls` option.
 * @type {string|undefined}
 * @api
 */
olx.source.XYZOptions.prototype.url;


/**
 * An array of URL templates.
 * @type {Array.<string>|undefined}
 * @api
 */
olx.source.XYZOptions.prototype.urls;


/**
 * Whether to wrap the world horizontally. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.XYZOptions.prototype.wrapX;


/**
 * Duration of the opacity transition for rendering.  To disable the opacity
 * transition, pass `transition: 0`.
 * @type {number|undefined}
 * @api
 */
olx.source.XYZOptions.prototype.transition;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined),
 *     cacheSize: (number|undefined),
 *     crossOrigin: (null|string|undefined),
 *     projection: ol.ProjectionLike,
 *     maxZoom: (number|undefined),
 *     minZoom: (number|undefined),
 *     wrapX: (boolean|undefined),
 *     config: (Object|undefined),
 *     map: (string|undefined),
 *     account: string}}
 */
olx.source.CartoDBOptions;


/**
 * Attributions.
 * @type {ol.AttributionLike|undefined}
 * @api
 */
olx.source.CartoDBOptions.prototype.attributions;


/**
 * Cache size. Default is `2048`.
 * @type {number|undefined}
 * @api
 */
olx.source.CartoDBOptions.prototype.cacheSize;


/**
 * The `crossOrigin` attribute for loaded images.  Note that you must provide a
 * `crossOrigin` value if you are using the WebGL renderer or if you want to
 * access pixel data with the Canvas renderer.  See
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image}
 * for more detail.
 * @type {null|string|undefined}
 * @api
 */
olx.source.CartoDBOptions.prototype.crossOrigin;


/**
 * Projection. Default is `EPSG:3857`.
 * @type {ol.ProjectionLike}
 * @api
 */
olx.source.CartoDBOptions.prototype.projection;


/**
 * Optional max zoom level. Default is `18`.
 * @type {number|undefined}
 * @api
 */
olx.source.CartoDBOptions.prototype.maxZoom;


/**
 * Minimum zoom.
 * @type {number|undefined}
 * @api
 */
olx.source.CartoDBOptions.prototype.minZoom;


/**
 * Whether to wrap the world horizontally. Default is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.source.CartoDBOptions.prototype.wrapX;


/**
 * If using anonymous maps, the CartoDB config to use. See
 * {@link http://docs.cartodb.com/cartodb-platform/maps-api/anonymous-maps/}
 * for more detail.
 * If using named maps, a key-value lookup with the template parameters.
 * See {@link http://docs.cartodb.com/cartodb-platform/maps-api/named-maps/}
 * for more detail.
 * @type {Object|undefined}
 * @api
 */
olx.source.CartoDBOptions.prototype.config;


/**
 * If using named maps, this will be the name of the template to load.
 * See {@link http://docs.cartodb.com/cartodb-platform/maps-api/named-maps/}
 * for more detail.
 * @type {string|undefined}
 * @api
 */
olx.source.CartoDBOptions.prototype.map;


/**
 * CartoDB account name
 * @type {string}
 * @api
 */
olx.source.CartoDBOptions.prototype.account;


/**
 * @typedef {{attributions: (ol.AttributionLike|undefined),
 *     cacheSize: (number|undefined),
 *     crossOrigin: (null|string|undefined),
 *     projection: (ol.ProjectionLike|undefined),
 *     reprojectionErrorThreshold: (number|undefined),
 *     url: !string,
 *     tierSizeCalculation: (string|undefined),
 *     size: ol.Size,
 *     extent: (ol.Extent|undefined),
 *     transition: (number|undefined),
 *     tileSize: (number|undefined)}}
 */
olx.source.ZoomifyOptions;


/**
 * Attributions.
 * @type {ol.AttributionLike|undefined}
 * @api
 */
olx.source.ZoomifyOptions.prototype.attributions;


/**
 * Cache size. Default is `2048`.
 * @type {number|undefined}
 * @api
 */
olx.source.ZoomifyOptions.prototype.cacheSize;


/**
 * The `crossOrigin` attribute for loaded images.  Note that you must provide a
 * `crossOrigin` value if you are using the WebGL renderer or if you want to
 * access pixel data with the Canvas renderer.  See
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image}
 * for more detail.
 * @type {null|string|undefined}
 * @api
 */
olx.source.ZoomifyOptions.prototype.crossOrigin;


/**
 * Projection.
 * @type {ol.ProjectionLike|undefined}
 * @api
 */
olx.source.ZoomifyOptions.prototype.projection;


/**
 * Maximum allowed reprojection error (in pixels). Default is `0.5`.
 * Higher values can increase reprojection performance, but decrease precision.
 * @type {number|undefined}
 * @api
 */
olx.source.ZoomifyOptions.prototype.reprojectionErrorThreshold;


/**
 * URL template or base URL of the Zoomify service. A base URL is the fixed part
 * of the URL, excluding the tile group, z, x, and y folder structure, e.g.
 * `http://my.zoomify.info/IMAGE.TIF/`. A URL template must include
 * `{TileGroup}`, `{x}`, `{y}`, and `{z}` placeholders, e.g.
 * `http://my.zoomify.info/IMAGE.TIF/{TileGroup}/{z}-{x}-{y}.jpg`.
 * Internet Imaging Protocol (IIP) with JTL extension can be also used with
 * `{tileIndex}` and `{z}` placeholders, e.g.
 * `http://my.zoomify.info?FIF=IMAGE.TIF&JTL={z},{tileIndex}`.
 * A `{?-?}` template pattern, for example `subdomain{a-f}.domain.com`, may be
 * used instead of defining each one separately in the `urls` option.
 * @type {!string}
 * @api
 */
olx.source.ZoomifyOptions.prototype.url;


/**
 * Tier size calculation method: `default` or `truncated`.
 * @type {string|undefined}
 * @api
 */
olx.source.ZoomifyOptions.prototype.tierSizeCalculation;


/**
 * Size of the image.
 * @type {ol.Size}
 * @api
 */
olx.source.ZoomifyOptions.prototype.size;


/**
 * Extent for the TileGrid that is created. Default sets the TileGrid in the
 * fourth quadrant, meaning extent is `[0, -height, width, 0]`. To change the
 * extent to the first quadrant (the default for OpenLayers 2) set the extent
 * as `[0, 0, width, height]`.
 * @type {ol.Extent|undefined}
 * @api
 */
olx.source.ZoomifyOptions.prototype.extent;


/**
 * Duration of the opacity transition for rendering.  To disable the opacity
 * transition, pass `transition: 0`.
 * @type {number|undefined}
 * @api
 */
olx.source.ZoomifyOptions.prototype.transition;


/**
 * Tile size. Same tile size is used for all zoom levels. Default value is
 * `256`.
 * @type {number|undefined}
 * @api
 */
olx.source.ZoomifyOptions.prototype.tileSize;


/**
 * @typedef {{fill: (ol.style.Fill|undefined),
 *     radius: number,
 *     snapToPixel: (boolean|undefined),
 *     stroke: (ol.style.Stroke|undefined),
 *     atlasManager: (ol.style.AtlasManager|undefined)}}
 */
olx.style.CircleOptions;


/**
 * Fill style.
 * @type {ol.style.Fill|undefined}
 * @api
 */
olx.style.CircleOptions.prototype.fill;


/**
 * Circle radius.
 * @type {number}
 * @api
 */
olx.style.CircleOptions.prototype.radius;


/**
 * If `true` integral numbers of pixels are used as the X and Y pixel
 * coordinate when drawing the circle in the output canvas. If `false`
 * fractional numbers may be used. Using `true` allows for "sharp"
 * rendering (no blur), while using `false` allows for "accurate"
 * rendering. Note that accuracy is important if the circle's
 * position is animated. Without it, the circle may jitter noticeably.
 * Default value is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.style.CircleOptions.prototype.snapToPixel;


/**
 * Stroke style.
 * @type {ol.style.Stroke|undefined}
 * @api
 */
olx.style.CircleOptions.prototype.stroke;


/**
 * The atlas manager to use for this circle. When using WebGL it is
 * recommended to use an atlas manager to avoid texture switching.
 * If an atlas manager is given, the circle is added to an atlas.
 * By default no atlas manager is used.
 * @type {ol.style.AtlasManager|undefined}
 */
olx.style.CircleOptions.prototype.atlasManager;


/**
 * @typedef {{color: (ol.Color|ol.ColorLike|undefined)}}
 */
olx.style.FillOptions;


/**
 * A color, gradient or pattern. See {@link ol.color}
 * and {@link ol.colorlike} for possible formats. Default null;
 * if null, the Canvas/renderer default black will be used.
 * @type {ol.Color|ol.ColorLike|undefined}
 * @api
 */
olx.style.FillOptions.prototype.color;


/**
 * @typedef {{anchor: (Array.<number>|undefined),
 *     anchorOrigin: (ol.style.IconOrigin|undefined),
 *     anchorXUnits: (ol.style.IconAnchorUnits|undefined),
 *     anchorYUnits: (ol.style.IconAnchorUnits|undefined),
 *     color: (ol.Color|string|undefined),
 *     crossOrigin: (null|string|undefined),
 *     img: (Image|HTMLCanvasElement|undefined),
 *     offset: (Array.<number>|undefined),
 *     offsetOrigin: (ol.style.IconOrigin|undefined),
 *     opacity: (number|undefined),
 *     scale: (number|undefined),
 *     snapToPixel: (boolean|undefined),
 *     rotateWithView: (boolean|undefined),
 *     rotation: (number|undefined),
 *     size: (ol.Size|undefined),
 *     imgSize: (ol.Size|undefined),
 *     src: (string|undefined)}}
 */
olx.style.IconOptions;


/**
 * Anchor. Default value is `[0.5, 0.5]` (icon center).
 * @type {Array.<number>|undefined}
 * @api
 */
olx.style.IconOptions.prototype.anchor;


/**
 * Origin of the anchor: `bottom-left`, `bottom-right`, `top-left` or
 * `top-right`. Default is `top-left`.
 * @type {ol.style.IconOrigin|undefined}
 * @api
 */
olx.style.IconOptions.prototype.anchorOrigin;


/**
 * Units in which the anchor x value is specified. A value of `'fraction'`
 * indicates the x value is a fraction of the icon. A value of `'pixels'`
 * indicates the x value in pixels. Default is `'fraction'`.
 * @type {ol.style.IconAnchorUnits|undefined}
 * @api
 */
olx.style.IconOptions.prototype.anchorXUnits;


/**
 * Units in which the anchor y value is specified. A value of `'fraction'`
 * indicates the y value is a fraction of the icon. A value of `'pixels'`
 * indicates the y value in pixels. Default is `'fraction'`.
 * @type {ol.style.IconAnchorUnits|undefined}
 * @api
 */
olx.style.IconOptions.prototype.anchorYUnits;


/**
 * Color to tint the icon. If not specified, the icon will be left as is.
 * @type {ol.Color|string|undefined}
 * @api
 */
olx.style.IconOptions.prototype.color;


/**
 * The `crossOrigin` attribute for loaded images.  Note that you must provide a
 * `crossOrigin` value if you are using the WebGL renderer or if you want to
 * access pixel data with the Canvas renderer.  See
 * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image}
 * for more detail.
 * @type {null|string|undefined}
 * @api
 */
olx.style.IconOptions.prototype.crossOrigin;


/**
 * Image object for the icon. If the `src` option is not provided then the
 * provided image must already be loaded. And in that case, it is required
 * to provide the size of the image, with the `imgSize` option.
 * @type {Image|HTMLCanvasElement|undefined}
 * @api
 */
olx.style.IconOptions.prototype.img;


/**
 * Offset, which, together with the size and the offset origin,
 * define the sub-rectangle to use from the original icon image. Default value
 * is `[0, 0]`.
 * @type {Array.<number>|undefined}
 * @api
 */
olx.style.IconOptions.prototype.offset;


/**
 * Origin of the offset: `bottom-left`, `bottom-right`, `top-left` or
 * `top-right`. Default is `top-left`.
 * @type {ol.style.IconOrigin|undefined}
 * @api
 */
olx.style.IconOptions.prototype.offsetOrigin;


/**
 * Opacity of the icon. Default is `1`.
 * @type {number|undefined}
 * @api
 */
olx.style.IconOptions.prototype.opacity;


/**
 * Scale. Default is `1`.
 * @type {number|undefined}
 * @api
 */
olx.style.IconOptions.prototype.scale;


/**
 * If `true` integral numbers of pixels are used as the X and Y pixel
 * coordinate when drawing the icon in the output canvas. If `false`
 * fractional numbers may be used. Using `true` allows for "sharp"
 * rendering (no blur), while using `false` allows for "accurate"
 * rendering. Note that accuracy is important if the icon's position
 * is animated. Without it, the icon may jitter noticeably. Default
 * value is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.style.IconOptions.prototype.snapToPixel;


/**
 * Whether to rotate the icon with the view. Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.style.IconOptions.prototype.rotateWithView;


/**
 * Rotation in radians (positive rotation clockwise). Default is `0`.
 * @type {number|undefined}
 * @api
 */
olx.style.IconOptions.prototype.rotation;


/**
 * Icon size in pixel. Can be used together with `offset` to define the
 * sub-rectangle to use from the origin (sprite) icon image.
 * @type {ol.Size|undefined}
 * @api
 */
olx.style.IconOptions.prototype.size;


/**
 * Image size in pixels. Only required if `img` is set and `src` is not, and for
 * SVG images in Internet Explorer 11. The provided `imgSize` needs to match
 * the actual size of the image.
 * @type {ol.Size|undefined}
 * @api
 */
olx.style.IconOptions.prototype.imgSize;


/**
 * Image source URI.
 * @type {string|undefined}
 * @api
 */
olx.style.IconOptions.prototype.src;


/**
 * Specify radius for regular polygons, or radius1 and radius2 for stars.
 * @typedef {{fill: (ol.style.Fill|undefined),
 *     points: number,
 *     radius: (number|undefined),
 *     radius1: (number|undefined),
 *     radius2: (number|undefined),
 *     angle: (number|undefined),
 *     snapToPixel: (boolean|undefined),
 *     stroke: (ol.style.Stroke|undefined),
 *     rotation: (number|undefined),
 *     rotateWithView: (boolean|undefined),
 *     atlasManager: (ol.style.AtlasManager|undefined)}}
 */
olx.style.RegularShapeOptions;


/**
 * Fill style.
 * @type {ol.style.Fill|undefined}
 * @api
 */
olx.style.RegularShapeOptions.prototype.fill;


/**
 * Number of points for stars and regular polygons. In case of a polygon, the
 * number of points is the number of sides.
 * @type {number}
 * @api
 */
olx.style.RegularShapeOptions.prototype.points;


/**
 * Radius of a regular polygon.
 * @type {number|undefined}
 * @api
 */
olx.style.RegularShapeOptions.prototype.radius;


/**
 * Outer radius of a star.
 * @type {number|undefined}
 * @api
 */
olx.style.RegularShapeOptions.prototype.radius1;


/**
 * Inner radius of a star.
 * @type {number|undefined}
 * @api
 */
olx.style.RegularShapeOptions.prototype.radius2;


/**
 * Shape's angle in radians. A value of 0 will have one of the shape's point
 * facing up.
 * Default value is 0.
 * @type {number|undefined}
 * @api
 */
olx.style.RegularShapeOptions.prototype.angle;


/**
 * If `true` integral numbers of pixels are used as the X and Y pixel
 * coordinate when drawing the shape in the output canvas. If `false`
 * fractional numbers may be used. Using `true` allows for "sharp"
 * rendering (no blur), while using `false` allows for "accurate"
 * rendering. Note that accuracy is important if the shape's
 * position is animated. Without it, the shape may jitter noticeably.
 * Default value is `true`.
 * @type {boolean|undefined}
 * @api
 */
olx.style.RegularShapeOptions.prototype.snapToPixel;


/**
 * Stroke style.
 * @type {ol.style.Stroke|undefined}
 * @api
 */
olx.style.RegularShapeOptions.prototype.stroke;


/**
 * Rotation in radians (positive rotation clockwise). Default is `0`.
 * @type {number|undefined}
 * @api
 */
olx.style.RegularShapeOptions.prototype.rotation;


/**
 * Whether to rotate the shape with the view. Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.style.RegularShapeOptions.prototype.rotateWithView;


/**
 * The atlas manager to use for this symbol. When using WebGL it is
 * recommended to use an atlas manager to avoid texture switching.
 * If an atlas manager is given, the symbol is added to an atlas.
 * By default no atlas manager is used.
 * @type {ol.style.AtlasManager|undefined}
 */
olx.style.RegularShapeOptions.prototype.atlasManager;


/**
 * @typedef {{color: (ol.Color|ol.ColorLike|undefined),
 *     lineCap: (string|undefined),
 *     lineJoin: (string|undefined),
 *     lineDash: (Array.<number>|undefined),
 *     lineDashOffset: (number|undefined),
 *     miterLimit: (number|undefined),
 *     width: (number|undefined)}}
 */
olx.style.StrokeOptions;


/**
 * A color, gradient or pattern. See {@link ol.color}
 * and {@link ol.colorlike} for possible formats. Default null;
 * if null, the Canvas/renderer default black will be used.
 * @type {ol.Color|ol.ColorLike|undefined}
 * @api
 */
olx.style.StrokeOptions.prototype.color;


/**
 * Line cap style: `butt`, `round`, or `square`. Default is `round`.
 * @type {string|undefined}
 * @api
 */
olx.style.StrokeOptions.prototype.lineCap;


/**
 * Line join style: `bevel`, `round`, or `miter`. Default is `round`.
 * @type {string|undefined}
 * @api
 */
olx.style.StrokeOptions.prototype.lineJoin;


/**
 * Line dash pattern. Default is `undefined` (no dash). Please note that
 * Internet Explorer 10 and lower [do not support][mdn] the `setLineDash`
 * method on the `CanvasRenderingContext2D` and therefore this option will
 * have no visual effect in these browsers.
 *
 * [mdn]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility
 *
 * @type {Array.<number>|undefined}
 * @api
 */
olx.style.StrokeOptions.prototype.lineDash;


/**
 * Line dash offset. Default is '0'.
 * @type {number|undefined}
 * @api
 */
olx.style.StrokeOptions.prototype.lineDashOffset;


/**
 * Miter limit. Default is `10`.
 * @type {number|undefined}
 * @api
 */
olx.style.StrokeOptions.prototype.miterLimit;


/**
 * Width.
 * @type {number|undefined}
 * @api
 */
olx.style.StrokeOptions.prototype.width;


/**
 * @typedef {{font: (string|undefined),
 *     maxAngle: (number|undefined),
 *     offsetX: (number|undefined),
 *     offsetY: (number|undefined),
 *     overflow: (boolean|undefined),
 *     placement: (ol.style.TextPlacement|string|undefined),
 *     scale: (number|undefined),
 *     rotateWithView: (boolean|undefined),
 *     rotation: (number|undefined),
 *     text: (string|undefined),
 *     textAlign: (string|undefined),
 *     textBaseline: (string|undefined),
 *     fill: (ol.style.Fill|undefined),
 *     stroke: (ol.style.Stroke|undefined),
 *     backgroundFill: (ol.style.Fill|undefined),
 *     backgroundStroke: (ol.style.Stroke|undefined),
 *     padding: (Array.<number>|undefined)}}
 */
olx.style.TextOptions;


/**
 * Font style as CSS 'font' value, see:
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font}.
 * Default is '10px sans-serif'
 * @type {string|undefined}
 * @api
 */
olx.style.TextOptions.prototype.font;


/**
 * When `placement` is set to `'line'`, allow a maximum angle between adjacent
 * characters. The expected value is in radians, and the default is 45°
 * (`Math.PI / 4`).
 * @type {number|undefined}
 * @api
 */
olx.style.TextOptions.prototype.maxAngle;


/**
 * Horizontal text offset in pixels. A positive will shift the text right.
 * Default is `0`.
 * @type {number|undefined}
 * @api
 */
olx.style.TextOptions.prototype.offsetX;


/**
 * Vertical text offset in pixels. A positive will shift the text down. Default
 * is `0`.
 * @type {number|undefined}
 * @api
 */
olx.style.TextOptions.prototype.offsetY;


/**
 * For polygon labels or when `placement` is set to `'line'`, allow text to
 * exceed the width of the polygon at the label position or the length of
 * the path that it follows. Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.style.TextOptions.prototype.overflow;


/**
 * Text placement.
 * @type {ol.style.TextPlacement|undefined}
 * @api
 */
olx.style.TextOptions.prototype.placement;


/**
 * Scale.
 * @type {number|undefined}
 * @api
 */
olx.style.TextOptions.prototype.scale;


/**
 * Whether to rotate the text with the view. Default is `false`.
 * @type {boolean|undefined}
 * @api
 */
olx.style.TextOptions.prototype.rotateWithView;


/**
 * Rotation in radians (positive rotation clockwise). Default is `0`.
 * @type {number|undefined}
 * @api
 */
olx.style.TextOptions.prototype.rotation;


/**
 * Text content.
 * @type {string|undefined}
 * @api
 */
olx.style.TextOptions.prototype.text;


/**
 * Text alignment. Possible values: 'left', 'right', 'center', 'end' or 'start'.
 * Default is 'center' for `placement: 'point'`. For `placement: 'line'`, the
 * default is to let the renderer choose a placement where `maxAngle` is not
 * exceeded.
 * @type {string|undefined}
 * @api
 */
olx.style.TextOptions.prototype.textAlign;


/**
 * Text base line. Possible values: 'bottom', 'top', 'middle', 'alphabetic',
 * 'hanging', 'ideographic'. Default is 'middle'.
 * @type {string|undefined}
 * @api
 */
olx.style.TextOptions.prototype.textBaseline;


/**
 * Fill style. If none is provided, we'll use a dark fill-style (#333).
 * @type {ol.style.Fill|undefined}
 * @api
 */
olx.style.TextOptions.prototype.fill;


/**
 * Stroke style.
 * @type {ol.style.Stroke|undefined}
 * @api
 */
olx.style.TextOptions.prototype.stroke;


/**
 * Fill style for the text background when `placement` is `'point'`. Default is
 * no fill.
 * @type {ol.style.Fill|undefined}
 * @api
 */
olx.style.TextOptions.prototype.backgroundFill;


/**
 * Stroke style for the text background  when `placement` is `'point'`. Default
 * is no stroke.
 * @type {ol.style.Stroke|undefined}
 * @api
 */
olx.style.TextOptions.prototype.backgroundStroke;


/**
 * Padding in pixels around the text for decluttering and background. The order
 * of values in the array is `[top, right, bottom, left]`. Default is
 * `[0, 0, 0, 0]`.
 * @type {Array.<number>|undefined}
 * @api
 */
olx.style.TextOptions.prototype.padding;


/**
 * @typedef {{geometry: (undefined|string|module:ol/geom/Geometry~Geometry|ol.StyleGeometryFunction),
 *     fill: (ol.style.Fill|undefined),
 *     image: (ol.style.Image|undefined),
 *     renderer: (ol.StyleRenderFunction|undefined),
 *     stroke: (ol.style.Stroke|undefined),
 *     text: (ol.style.Text|undefined),
 *     zIndex: (number|undefined)}}
 */
olx.style.StyleOptions;


/**
 * Feature property or geometry or function returning a geometry to render for
 * this style.
 * @type {undefined|string|module:ol/geom/Geometry~Geometry|ol.StyleGeometryFunction}
 * @api
 */
olx.style.StyleOptions.prototype.geometry;


/**
 * Fill style.
 * @type {ol.style.Fill|undefined}
 * @api
 */
olx.style.StyleOptions.prototype.fill;


/**
 * Image style.
 * @type {ol.style.Image|undefined}
 * @api
 */
olx.style.StyleOptions.prototype.image;


/**
 * Custom renderer. When configured, `fill`, `stroke` and `image` will be
 * ignored, and the provided function will be called with each render frame for
 * each geometry.
 *
 * @type {ol.StyleRenderFunction|undefined}
 */
olx.style.StyleOptions.prototype.renderer;


/**
 * Stroke style.
 * @type {ol.style.Stroke|undefined}
 * @api
 */
olx.style.StyleOptions.prototype.stroke;


/**
 * Text style.
 * @type {ol.style.Text|undefined}
 * @api
 */
olx.style.StyleOptions.prototype.text;


/**
 * Z index.
 * @type {number|undefined}
 * @api
 */
olx.style.StyleOptions.prototype.zIndex;


/**
 * @typedef {{extent: (ol.Extent|undefined),
 *     minZoom: (number|undefined),
 *     origin: (ol.Coordinate|undefined),
 *     origins: (Array.<ol.Coordinate>|undefined),
 *     resolutions: !Array.<number>,
 *     sizes: (Array.<ol.Size>|undefined),
 *     tileSize: (number|ol.Size|undefined),
 *     tileSizes: (Array.<number|ol.Size>|undefined)}}
 */
olx.tilegrid.TileGridOptions;


/**
 * Extent for the tile grid. No tiles outside this extent will be requested by
 * {@link ol.source.Tile} sources. When no `origin` or `origins` are
 * configured, the `origin` will be set to the top-left corner of the extent.
 * @type {ol.Extent|undefined}
 * @api
 */
olx.tilegrid.TileGridOptions.prototype.extent;


/**
 * Minimum zoom. Default is 0.
 * @type {number|undefined}
 * @api
 */
olx.tilegrid.TileGridOptions.prototype.minZoom;


/**
 * The tile grid origin, i.e. where the `x` and `y` axes meet (`[z, 0, 0]`).
 * Tile coordinates increase left to right and upwards. If not specified,
 * `extent` or `origins` must be provided.
 * @type {ol.Coordinate|undefined}
 * @api
 */
olx.tilegrid.TileGridOptions.prototype.origin;


/**
 * Tile grid origins, i.e. where the `x` and `y` axes meet (`[z, 0, 0]`), for
 * each zoom level. If given, the array length should match the length of the
 * `resolutions` array, i.e. each resolution can have a different origin. Tile
 * coordinates increase left to right and upwards. If not specified, `extent`
 * or `origin` must be provided.
 * @type {Array.<ol.Coordinate>|undefined}
 * @api
 */
olx.tilegrid.TileGridOptions.prototype.origins;


/**
 * Resolutions. The array index of each resolution needs to match the zoom
 * level. This means that even if a `minZoom` is configured, the resolutions
 * array will have a length of `maxZoom + 1`.
 * @type {!Array.<number>}
 * @api
 */
olx.tilegrid.TileGridOptions.prototype.resolutions;


/**
 * Tile size. Default is `[256, 256]`.
 * @type {number|ol.Size|undefined}
 * @api
 */
olx.tilegrid.TileGridOptions.prototype.tileSize;


/**
 * Tile sizes. If given, the array length should match the length of the
 * `resolutions` array, i.e. each resolution can have a different tile size.
 * @type {Array.<number|ol.Size>|undefined}
 * @api
 */
olx.tilegrid.TileGridOptions.prototype.tileSizes;


/**
 * @typedef {{extent: (ol.Extent|undefined),
 *     origin: (ol.Coordinate|undefined),
 *     origins: (Array.<ol.Coordinate>|undefined),
 *     resolutions: !Array.<number>,
 *     matrixIds: !Array.<string>,
 *     sizes: (Array.<ol.Size>|undefined),
 *     tileSize: (number|ol.Size|undefined),
 *     tileSizes: (Array.<number|ol.Size>|undefined)}}
 */
olx.tilegrid.WMTSOptions;


/**
 * Extent for the tile grid. No tiles outside this extent will be requested by
 * {@link ol.source.Tile} sources. When no `origin` or `origins` are
 * configured, the `origin` will be set to the top-left corner of the extent.
 * @type {ol.Extent|undefined}
 * @api
 */
olx.tilegrid.WMTSOptions.prototype.extent;


/**
 * The tile grid origin, i.e. where the `x` and `y` axes meet (`[z, 0, 0]`).
 * Tile coordinates increase left to right and upwards. If not specified,
 * `extent` or `origins` must be provided.
 * @type {ol.Coordinate|undefined}
 * @api
 */
olx.tilegrid.WMTSOptions.prototype.origin;


/**
 * Tile grid origins, i.e. where the `x` and `y` axes meet (`[z, 0, 0]`), for
 * each zoom level. If given, the array length should match the length of the
 * `resolutions` array, i.e. each resolution can have a different origin. Tile
 * coordinates increase left to right and upwards. If not specified, `extent` or
 * `origin` must be provided.
 * @type {Array.<ol.Coordinate>|undefined}
 * @api
 */
olx.tilegrid.WMTSOptions.prototype.origins;


/**
 * Resolutions. The array index of each resolution needs to match the zoom
 * level. This means that even if a `minZoom` is configured, the resolutions
 * array will have a length of `maxZoom + 1`
 * @type {!Array.<number>}
 * @api
 */
olx.tilegrid.WMTSOptions.prototype.resolutions;


/**
 * matrix IDs. The length of this array needs to match the length of the
 * `resolutions` array.
 * @type {!Array.<string>}
 * @api
 */
olx.tilegrid.WMTSOptions.prototype.matrixIds;


/**
 * Number of tile rows and columns of the grid for each zoom level. The values
 * here are the `TileMatrixWidth` and `TileMatrixHeight` advertised in the
 * GetCapabilities response of the WMTS, and define the grid's extent together
 * with the `origin`. An `extent` can be configured in addition, and will
 * further limit the extent for which tile requests are made by sources. Note
 * that when the top-left corner of the `extent` is used as `origin` or
 * `origins`, then the `y` value must be negative because OpenLayers tile
 * coordinates increase upwards.
 * @type {Array.<ol.Size>|undefined}
 * @api
 */
olx.tilegrid.WMTSOptions.prototype.sizes;


/**
 * Tile size.
 * @type {number|ol.Size|undefined}
 * @api
 */
olx.tilegrid.WMTSOptions.prototype.tileSize;


/**
 * Tile sizes. The length of this array needs to match the length of the
 * `resolutions` array.
 * @type {Array.<number|ol.Size>|undefined}
 * @api
 */
olx.tilegrid.WMTSOptions.prototype.tileSizes;


/**
 * Number of tile columns that cover the grid's extent for each zoom level. Only
 * required when used with a source that has `wrapX` set to `true`, and only
 * when the grid's origin differs from the one of the projection's extent. The
 * array length has to match the length of the `resolutions` array, i.e. each
 * resolution will have a matching entry here.
 * @type {Array.<number>|undefined}
 * @api
 */
olx.tilegrid.WMTSOptions.prototype.widths;


/**
 * @typedef {{extent: (ol.Extent|undefined),
 *     maxZoom: (number|undefined),
 *     minZoom: (number|undefined),
 *     tileSize: (number|ol.Size|undefined)}}
 */
olx.tilegrid.XYZOptions;


/**
 * Extent for the tile grid.  The origin for an XYZ tile grid is the top-left
 * corner of the extent.  The zero level of the grid is defined by the
 * resolution at which one tile fits in the provided extent.  If not provided,
 * the extent of the EPSG:3857 projection is used.
 * @type {ol.Extent|undefined}
 * @api
 */
olx.tilegrid.XYZOptions.prototype.extent;


/**
 * Maximum zoom.  The default is `ol.DEFAULT_MAX_ZOOM`.  This determines the
 * number of levels in the grid set.  For example, a `maxZoom` of 21 means there
 * are 22 levels in the grid set.
 * @type {number|undefined}
 * @api
 */
olx.tilegrid.XYZOptions.prototype.maxZoom;


/**
 * Minimum zoom. Default is 0.
 * @type {number|undefined}
 * @api
 */
olx.tilegrid.XYZOptions.prototype.minZoom;


/**
 * Tile size in pixels. Default is `[256, 256]`.
 * @type {number|ol.Size|undefined}
 * @api
 */
olx.tilegrid.XYZOptions.prototype.tileSize;


/**
 * @typedef {{center: ol.Coordinate,
 *     projection: module:ol/proj/Projection~Projection,
 *     resolution: number,
 *     rotation: number,
 *     zoom: number}}
 */
olx.ViewState;


/**
 * @type {ol.Coordinate}
 * @api
 */
olx.ViewState.prototype.center;


/**
 * @type {module:ol/proj/Projection~Projection}
 * @api
 */
olx.ViewState.prototype.projection;


/**
 * @type {number}
 * @api
 */
olx.ViewState.prototype.resolution;


/**
 * @type {number}
 * @api
 */
olx.ViewState.prototype.rotation;


/**
 * The current zoom level.
 * @type {number}
 * @api
 */
olx.ViewState.prototype.zoom;


/**
 * @typedef {{initialSize: (number|undefined),
 *     maxSize: (number|undefined),
 *     space: (number|undefined)}}
 */
olx.style.AtlasManagerOptions;


/**
 * The size in pixels of the first atlas image. Default is `256`.
 * @type {number|undefined}
 * @api
 */
olx.style.AtlasManagerOptions.prototype.initialSize;


/**
 * The maximum size in pixels of atlas images. Default is
 * `WEBGL_MAX_TEXTURE_SIZE` or 2048 if WebGL is not supported.
 * @type {number|undefined}
 * @api
 */
olx.style.AtlasManagerOptions.prototype.maxSize;


/**
 * The space in pixels between images (default: 1).
 * @type {number|undefined}
 * @api
 */
olx.style.AtlasManagerOptions.prototype.space;
