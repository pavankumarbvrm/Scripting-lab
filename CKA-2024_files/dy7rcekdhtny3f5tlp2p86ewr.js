define.alias("@glimmer/component/-private/ember-component-manager","msg-reactions/component-managers/glimmer")
define.alias("artdeco-button/components/artdeco-button","msg-reactions/components/artdeco-button")
define.alias("artdeco-card/components/artdeco-card-image","msg-reactions/components/artdeco-card-image")
define.alias("artdeco-card/components/artdeco-card","msg-reactions/components/artdeco-card")
define.alias("artdeco-modal/components/artdeco-confirmation-dialog","msg-reactions/components/artdeco-confirmation-dialog")
define.alias("artdeco-dropdown/components/artdeco-dropdown-content","msg-reactions/components/artdeco-dropdown-content")
define.alias("artdeco-dropdown/components/artdeco-dropdown-header","msg-reactions/components/artdeco-dropdown-header")
define.alias("artdeco-dropdown/components/artdeco-dropdown-item","msg-reactions/components/artdeco-dropdown-item")
define.alias("artdeco-dropdown/components/artdeco-dropdown-trigger","msg-reactions/components/artdeco-dropdown-trigger")
define.alias("artdeco-dropdown/components/artdeco-dropdown","msg-reactions/components/artdeco-dropdown")
define.alias("artdeco-loader/components/artdeco-loader","msg-reactions/components/artdeco-loader")
define.alias("artdeco-modal/components/container","msg-reactions/components/artdeco-modal-container")
define.alias("artdeco-modal/components/artdeco-modal-content","msg-reactions/components/artdeco-modal-content")
define.alias("artdeco-modal/components/artdeco-modal-footer","msg-reactions/components/artdeco-modal-footer")
define.alias("artdeco-modal/components/artdeco-modal-header","msg-reactions/components/artdeco-modal-header")
define.alias("artdeco-modal/components/artdeco-modal","msg-reactions/components/artdeco-modal")
define.alias("artdeco-notification-badge/components/artdeco-notification-badge","msg-reactions/components/artdeco-notification-badge")
define.alias("artdeco-toast/components/artdeco-toast-item","msg-reactions/components/artdeco-toast-item")
define.alias("artdeco-toast/components/artdeco-toasts","msg-reactions/components/artdeco-toasts")
define.alias("ember-vector-images/components/custom-image","msg-reactions/components/custom-image")
define.alias("ember-wormhole/components/ember-wormhole","msg-reactions/components/ember-wormhole")
define("msg-reactions/components/emoji/emoji-i18n",["exports","@ember/template-factory","@ember/component/template-only","@ember/component"],(function(e,t,i,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const a=(0,r.setComponentTemplate)((0,t.createTemplateFactory)({id:"33jaR6LL",block:'[[[1,"\\n"],[1,"\\n"],[1,"\\n  "]],[],false,[]]',moduleName:"msg-reactions/components/emoji/emoji-i18n.gjs",isStrictMode:!0}),(0,i.default)("emoji-i18n","EmojiI18n"))
e.default=a}))
define("msg-reactions/components/emoji/promoted-reactions-list-presenter",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@ember/template-factory","@ember/component","msg-shared/utils/constants","emoji-picker/helpers/emoji-skintone-modifier","emoji-picker/utils/emojis/emojis-popular","emoji-picker/utils/emojis/emojis-ai","@glimmer/component","@glimmer/tracking","@ember/service","@ember/object","@ember/debug","ember-cli-pemberly-i18n/helpers/t","@ember/helper","@ember/modifier","emoji-picker/components/emoji-hoverable","emoji-picker/components/emoji-i18n","emoji-picker/components/emoji-i18n-v2"],(function(e,t,i,r,a,o,n,s,l,c,m,d,p,u,g,h,f,b,y,j,v,_){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var k,w,R,S,E,N,T,D,M,P,O,x,z
const{KEYCODES:A}=s.default
e.default=(0,n.setComponentTemplate)((0,o.createTemplateFactory)({id:"jbHEFdai",block:'[[[1,"\\n"],[1,"    "],[10,"ul"],[14,0,"emoji-popular-list__container"],[14,"role","menu"],[12],[1,"\\n"],[42,[28,[31,1],[[28,[31,1],[[30,0,["emojisWithSkintone"]]],null]],null],null,[[[1,"        "],[10,"li"],[12],[1,"\\n"],[1,"          "],[11,0],[16,"aria-label",[28,[32,0],["i18n_react_a11y","msg-reactions/components/emoji/promoted-reactions-list-presenter"],[["emoji"],[[30,1,["shortName"]]]]]],[24,0,"emoji-popular-list__item"],[16,"onblur",[30,3]],[16,"onfocus",[28,[32,1],[[30,4],true],null]],[24,"tabindex","0"],[24,"role","menuitem"],[16,"title",[30,1,["shortName"]]],[4,[32,2],["click",[28,[32,1],[[30,0,["handlePopularEmojiSelect"]],[30,1,["unicode"]],[30,2]],null]],null],[4,[32,2],["keyup",[28,[32,1],[[30,0,["handlePopularEmojiSelect"]],[30,1,["unicode"]],[30,2]],null]],null],[12],[1,"\\n            "],[10,1],[14,0,"emoji-popular-list__item-emoji"],[12],[1,"\\n              "],[1,[30,1,["unicode"]]],[1,"\\n            "],[13],[1,"\\n          "],[13],[1,"\\n        "],[13],[1,"\\n"]],[1,2]],null],[1,"\\n"],[41,[51,[30,0,["isAiMessageFromPage"]]],[[[1,"        "],[10,"li"],[12],[1,"\\n          "],[8,[32,3],null,[["@handleEmojiSelect","@hoverableIdPrefix","@hoverableOutletId","@onTriggerClick","@onTriggerBlur","@onHoverableShow","@onHoverableHide","@isCircleTrigger","@size","@trackingClosePickerString","@trackingOpenPickerString","@trackingSelectEmojiString","@trackingSelectSearchedEmojiString","@triggerClasses","@triggerData"],[[30,0,["addReactionToMessageEvent"]],[52,[30,5],"msg_overlay_hover_reaction","msg_pillar_hover_reaction"],[52,[30,5],"msg-overlay__emoji-hoverable-outlet"],[30,0,["onTriggerClick"]],[30,0,["handleEmojiTriggerBlur"]],[30,6],[30,0,["onActionMenuEmojiPickerClose"]],false,1,[52,[30,5],"overlay.close_reactionpicker_frompromotedmenu","close_reactionpicker_frompromotedmenu"],[52,[30,5],"overlay.open_reactionpicker_frompromotedmenu","open_reactionpicker_frompromotedmenu"],[52,[30,5],"overlay.select_emoji_frompromotedmenu","select_emoji_frompromotedmenu"],[52,[30,5],"overlay.select_searched_emoji_frompromotedmenu","select_searched_emoji_frompromotedmenu"],"msg-reactions__entry-point msg-reactions-action-menu__entry-point m0 p0",[30,0,["triggerData"]]]],null],[1,"\\n        "],[13],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n  "]],["emoji","index","@hideAllActionMenus","@setMessageFocusState","@isOverlay","@onEmojiHoverableShow"],false,["each","-track-array","unless","if"]]',moduleName:"msg-reactions/components/emoji/promoted-reactions-list-presenter.gjs",scope:()=>[f.default,b.fn,y.on,j.default],isStrictMode:!0}),(k=(0,u.inject)("i18n"),w=(0,u.inject)("msg-data@data-manager"),R=(0,u.inject)("msg-shared@emoji-skintone"),S=(0,u.inject)("tracking"),E=(0,u.inject)("emoji-picker@emoji-frequent-manager"),N=class extends d.default{get isAiMessageFromPage(){var e
return this.lix.getTreatmentIsEnabled("voyager.web.organization-pages-messaging-ai-agent-reactions")&&(null===(e=this.args.messageActorUrn)||void 0===e?void 0:e.includes("pageMailbox"))}get emojisWithSkintone(){return this.emojis.map((e=>e.hasSkintone?{...e,unicode:(0,l.modifySingleEmojiWithSkintone)(e.unicode,this.emojiSkintoneManager.selectedSkintone)}:e))}constructor(){super(...arguments);(0,t.default)(this,"i18n",T,this);(0,t.default)(this,"msgDataManager",D,this);(0,t.default)(this,"emojiSkintoneManager",M,this);(0,t.default)(this,"tracking",P,this);(0,t.default)(this,"emojiRecentlyUsedManager",O,this);(0,t.default)(this,"lix",x,this);(0,t.default)(this,"triggerData",z,this)
this.triggerData={messageUrn:this.args.messageUrn,conversationUrn:this.args.conversationUrn,hideAllActionMenus:this.args.hideAllActionMenus}
this.emojis=this._computeTranslatedEmojis(this._emojiToUse())}_emojiToUse(){return this.isAiMessageFromPage?m.default:this.msgDataManager.isFrequentlyUsedReactionsEnabled?this.emojiRecentlyUsedManager.recentlyUsedEmojis.slice(0,3):c.default}_computeTranslatedEmojis(e){return e.map((e=>{if(e.shortName)return e
const t=this.msgDataManager.isNewEmojiUnicodesEnabled?_.default:v.default
e.shortName=this.i18n.lookupTranslation(t,e.i18nNameKey)()
e.i18nKeywords&&(e.keywords=e.i18nKeywords.map((e=>this.i18n.lookupTranslation(t,e)())))
return e}))}handlePopularEmojiSelect(e,t,i){if("keyup"===i.type&&i.which!==A.ENTER&&i.which!==A.SPACEBAR)return
const r=this.args.isOverlay?"overlay.add_promoted_emoji":"add_promoted_emoji"
this.tracking.fireInteractionEvent(`${r}${t+1}`)
this.msgDataManager.addReaction(this.args.messageUrn,e,this.args.conversationUrn)
"click"===i.type&&this.args.hideAllActionMenus&&this.args.hideAllActionMenus()}addReactionToMessageEvent(e){let{body:t,triggerData:i={}}=e
const{messageUrn:r,conversationUrn:a}=i
if(r){this.msgDataManager.addReaction(r,t,a)
this.onActionMenuEmojiPickerClose(i)}}onActionMenuEmojiPickerClose(e){this.args.onEmojiHoverableHide&&this.args.onEmojiHoverableHide(e)
e&&e.hideAllActionMenus&&"function"==typeof e.hideAllActionMenus&&e.hideAllActionMenus()}onTriggerClick(){this.args.hideOptionsMenu()
this.args.setMessageFocusState(!0)}handleEmojiTriggerBlur(e){if(!e)return
if(!e.relatedTarget){this.args.setMessageFocusState(!1)
return}const t=document.querySelector(".msg-s-event-listitem__message-bubble--is-focused .msg-s-event-listitem__actions-container"),i=e.relatedTarget.classList.contains("artdeco-hoverable-content--visible"),r=t&&t.contains(e.relatedTarget)
i||r||this.args.setMessageFocusState(!1)}},T=(0,r.default)(N.prototype,"i18n",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=(0,r.default)(N.prototype,"msgDataManager",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=(0,r.default)(N.prototype,"emojiSkintoneManager",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=(0,r.default)(N.prototype,"tracking",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=(0,r.default)(N.prototype,"emojiRecentlyUsedManager",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=(0,r.default)(N.prototype,"lix",[u.inject],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=(0,r.default)(N.prototype,"triggerData",[p.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,r.default)(N.prototype,"handlePopularEmojiSelect",[g.action],Object.getOwnPropertyDescriptor(N.prototype,"handlePopularEmojiSelect"),N.prototype),(0,r.default)(N.prototype,"addReactionToMessageEvent",[g.action],Object.getOwnPropertyDescriptor(N.prototype,"addReactionToMessageEvent"),N.prototype),(0,r.default)(N.prototype,"onActionMenuEmojiPickerClose",[g.action],Object.getOwnPropertyDescriptor(N.prototype,"onActionMenuEmojiPickerClose"),N.prototype),(0,r.default)(N.prototype,"onTriggerClick",[g.action],Object.getOwnPropertyDescriptor(N.prototype,"onTriggerClick"),N.prototype),(0,r.default)(N.prototype,"handleEmojiTriggerBlur",[g.action],Object.getOwnPropertyDescriptor(N.prototype,"handleEmojiTriggerBlur"),N.prototype),N))}))
define("msg-reactions/components/emoji/reaction-summary-presenter",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@ember/template-factory","@ember/component","emoji-picker/helpers/emoji-skintone-modifier","msg-shared/utils/constants","emoji-picker/utils/emojis","ember-lifeline","global-utils/utils/is-browser","@glimmer/tracking","@glimmer/component","ember-batcher","@ember/service","@ember/object","@ember/destroyable","@ember/render-modifiers/modifiers/did-insert","ember-set-helper/helpers/set","@ember/modifier","ember-cli-pemberly-i18n/helpers/t","ember-wormhole/components/ember-wormhole","global-helpers/helpers/lte","@ember/helper","global-helpers/helpers/sub","emoji-picker/components/emoji-hoverable","emoji-picker/components/emoji-i18n-v2"],(function(e,t,i,r,a,o,n,s,l,c,m,d,p,u,g,h,f,b,y,j,v,_,k,w,R,S,E,N){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var T,D,M,P,O,x,z,A,U,C,I,q,H,B,F,$,K,L,V,W,J,Y
e.default=(0,n.setComponentTemplate)((0,o.createTemplateFactory)({id:"qlvsdJsP",block:'[[[1,"\\n"],[41,[30,1,["reactionSummaryItems","length"]],[[[1,"      "],[11,"ul"],[24,0,"msg-reactions-reaction-summary-presenter__container"],[4,[32,0],[[28,[32,1],[[30,0],"reactionListEl"],null]],null],[12],[1,"\\n"],[42,[28,[31,2],[[28,[31,2],[[30,1,["reactionSummaryItems"]]],null]],null],null,[[[1,"          "],[10,"li"],[14,0,"msg-reactions-reaction-summary-presenter__pill-container"],[12],[1,"\\n            "],[11,"button"],[16,"aria-pressed",[52,[30,2,["viewerReacted"]],"true","false"]],[24,0,"m0"],[16,"data-reaction-id",[30,2,["emoji"]]],[24,4,"button"],[4,[32,2],["click",[28,[32,3],[[30,0,["toggleExistingReaction"]],[30,2]],null]],null],[4,[32,2],["mouseenter",[28,[32,3],[[30,0,["showReactors"]],[30,2]],null]],null],[4,[32,2],["focus",[28,[32,3],[[30,0,["showReactors"]],[30,2]],null]],null],[4,[32,2],["mouseleave",[28,[32,3],[[30,0,["stopShowingReactors"]],[30,2]],null]],null],[4,[32,2],["blur",[28,[32,3],[[30,0,["stopShowingReactors"]],[30,2]],null]],null],[4,[32,2],["keyup",[28,[32,3],[[30,0,["onReactorsKeyUp"]],[30,2]],null]],null],[12],[1,"\\n              "],[10,0],[15,0,[29,["msg-reactions-reaction-summary-presenter__pill",[52,[30,2,["viewerReacted"]]," msg-reactions-reaction-summary-presenter__pill--viewer-reacted"]]]],[12],[1,"\\n                "],[10,1],[14,0,"a11y-text"],[12],[1,"\\n"],[41,[30,2,["viewerReacted"]],[[[1,"                    "],[1,[28,[32,4],["i18n_a11y_unreact_text","msg-reactions/components/emoji/reaction-summary-presenter"],null]],[1,"\\n"]],[]],[[[1,"                    "],[1,[28,[32,4],["i18n_a11y_react_text","msg-reactions/components/emoji/reaction-summary-presenter"],null]],[1,"\\n"]],[]]],[1,"                "],[13],[1,"\\n                "],[10,1],[14,0,"msg-reactions-reaction-summary-presenter__pill-emoji"],[12],[1,"\\n                  "],[1,[30,2,["emoji"]]],[1,"\\n                "],[13],[1,"\\n                "],[10,1],[14,0,"msg-reactions-reaction-summary-presenter__pill-emoji-count-container t-mono"],[12],[1,"\\n                  "],[10,1],[14,0,"emoji-count"],[12],[1,[30,2,["count"]]],[13],[1,"\\n                "],[13],[1,"\\n              "],[13],[1,"\\n            "],[13],[1,"\\n\\n"],[41,[30,0,["reactionBeingViewed"]],[[[1,"              "],[8,[32,5],null,[["@to"],[[52,[30,3],"msg-overlay__reactor-list-outlet","msg-pillar__reactor-list-outlet"]]],[["default"],[[[[1,"\\n                "],[10,0],[14,0,"msg-reactions-reaction-summary-presenter__reactors-list-container t-14 t-white artdeco-card"],[15,5,[30,0,["reactorListStyle"]]],[12],[1,"\\n"],[41,[28,[32,6],[[30,0,["displayedReactorNames","length"]],5],null],[[[1,"                    "],[1,[28,[32,4],["i18n_reactors_list_full_names_lte_5","msg-reactions/components/emoji/reaction-summary-presenter"],[["reactorNames","emojiName"],[[30,0,["displayedReactorNames"]],[30,0,["emojiI18nName"]]]]]],[1,"\\n"]],[]],[[[1,"                    "],[1,[28,[32,4],["i18n_reactors_list_full_names_gt_5","msg-reactions/components/emoji/reaction-summary-presenter"],[["name1","name2","name3","name4","othersCount","emojiName"],[[28,[32,7],[[30,0,["displayedReactorNames"]],"0"],null],[28,[32,7],[[30,0,["displayedReactorNames"]],"1"],null],[28,[32,7],[[30,0,["displayedReactorNames"]],"2"],null],[28,[32,7],[[30,0,["displayedReactorNames"]],"3"],null],[28,[32,8],[[30,0,["displayedReactorNames","length"]],4],null],[30,0,["emojiI18nName"]]]]]],[1,"\\n"]],[]]],[1,"                "],[13],[1,"\\n              "]],[]]]]],[1,"\\n"]],[]],null],[1,"          "],[13],[1,"\\n"]],[2]],null],[1,"\\n"],[41,[51,[30,4]],[[[1,"          "],[10,"li"],[12],[1,"\\n            "],[8,[32,9],null,[["@handleEmojiSelect","@onHoverableShow","@onHoverableHide","@hoverableIdPrefix","@hoverableOutletId","@isCircleTrigger","@size","@trackingClosePickerString","@trackingOpenPickerString","@trackingSelectEmojiString","@trackingSelectSearchedEmojiString","@triggerClasses","@triggerData"],[[30,0,["addReactionToMessageEvent"]],[30,5],[30,6],[52,[30,3],"msg_overlay_summary_reaction","msg_pillar_summary_reaction"],[52,[30,3],"msg-overlay__emoji-hoverable-outlet"],false,1,[52,[30,3],"overlay.close_reactionpicker_frommessage","close_reactionpicker_frommessage"],[52,[30,3],"overlay.open_reactionpicker_frommessage","open_reactionpicker_frommessage"],[52,[30,3],"overlay.select_emoji_frommessage","select_emoji_frommessage"],[52,[30,3],"overlay.select_searched_emoji_frommessage","select_searched_emoji_frommessage"],"msg-reactions-reaction-summary-presenter__entry-point msg-reactions-reaction-summary-presenter__reaction-summary__entry-point m0 p0",[30,0,["triggerData"]]]],null],[1,"\\n          "],[13],[1,"\\n"]],[]],null],[1,"      "],[13],[1,"\\n"]],[]],null],[1,"  "]],["@viewData","reaction","@isOverlay","@hideEmojiPicker","@onEmojiHoverableShow","@onEmojiHoverableHide"],false,["if","each","-track-array","unless"]]',moduleName:"msg-reactions/components/emoji/reaction-summary-presenter.gjs",scope:()=>[y.default,j.default,v.on,R.fn,_.default,k.default,w.default,R.get,S.default,E.default],isStrictMode:!0}),(T=(0,h.inject)("i18n"),D=(0,h.inject)("msg-data@data-manager"),M=(0,h.inject)("authentication@authenticated-user"),P=(0,h.inject)("global-services@a11y-notification"),O=(0,h.inject)("client-sensor-web@client-sensor"),x=(0,h.inject)("jet"),z=(0,h.inject)("tracking"),A=(0,h.inject)("lix"),U=class e extends u.default{get isAutocloseTooltipEnabled(){return this.lix.getTreatmentIsEnabled("voyager.web.messaging-auto-close-emoji-tooltip")}constructor(){super(...arguments);(0,t.default)(this,"i18n",C,this);(0,t.default)(this,"msgDataManager",I,this);(0,t.default)(this,"authenticatedUser",q,this);(0,t.default)(this,"a11yNotification",H,this);(0,t.default)(this,"clientSensor",B,this);(0,t.default)(this,"jet",F,this);(0,t.default)(this,"reactionBeingViewed",$,this);(0,t.default)(this,"triggerData",K,this);(0,t.default)(this,"displayedReactorNames",L,this);(0,t.default)(this,"emojiI18nName",V,this);(0,t.default)(this,"reactorListStyle",W,this);(0,i.default)(this,"delayedShowReactorTasks",{});(0,i.default)(this,"delayedAutocloseReactorsTasks",{});(0,t.default)(this,"tracking",J,this);(0,t.default)(this,"lix",Y,this)
this.triggerData={messageUrn:this.args.viewData.messageUrn,conversationUrn:this.args.viewData.conversationUrn}
this.selfDisplayName={firstName:this.i18n.lookupTranslation(e,"i18n_you")(),isSelf:!0}
this.selfDisplayNameCapitalized={firstName:this.i18n.lookupTranslation(e,"i18n_you_capitalized")(),isSelf:!0}}toggleExistingReaction(e,t){const{emoji:i}=e,r=this.args.isOverlay?"overlay.":"",{viewerReacted:a}=e,o=a?"remove_reaction":"add_plusone_reaction",n=e.count
d.default&&this._animateCount(t,n,a)
this.tracking.fireInteractionEvent(`${r}${o}`)
const{messageUrn:s,conversationUrn:l}=this.args.viewData
if(a){this.msgDataManager.removeReaction(s,i,l)
1===n&&this.stopShowingReactors(e)
this.displayedReactorNames&&(this.displayedReactorNames=this.displayedReactorNames.filter((e=>!e.isSelf)))}else{this.msgDataManager.addReaction(s,i,l)
this.displayedReactorNames&&(this.displayedReactorNames=[...this.displayedReactorNames,this.selfDisplayName])}}addReactionToMessageEvent(e){let{body:t,triggerData:i={}}=e
const{messageUrn:r,conversationUrn:a}=i
r&&this.msgDataManager.addReaction(r,t,a)}_animateCount(e,t,i){const r=e.currentTarget
if(r&&d.default&&!this.isDestroying){const e=r.querySelector(".msg-reactions-reaction-summary-presenter__pill-emoji-count-container"),a=document.createElement("span")
jSecure.setElementContent(a,t)
const o=document.createElement("span")
o.textContent=t+(i?-1:1)
let n=0,s=i?-14:14
const l=i?14:-14,c=i?1:-1,d=r.querySelector(".emoji-count")
d.style.visibility="hidden"
a.style.position="absolute"
a.style.left=0
a.style.top=n
o.style.position="absolute"
o.style.left=0
o.style.top=s
const p=()=>{if(n===l)(0,m.cancelTask)(this,this.origNumIntervalId)
else{n+=c
a.style.top=`${n}px`}if(0===s)(0,m.cancelTask)(this,this.newNumIntervalId)
else{s+=c
o.style.top=`${s}px`}};(0,g.mutateDOM)((()=>{e.appendChild(a)
e.appendChild(o)}))
this.origNumIntervalId=this.scheduleInterval(p,"origNumIntervalId",33);(0,m.runTask)(this,(()=>{this.isDestroying||(0,g.mutateDOM)((()=>{d.removeAttribute("style")
a.remove()
o.remove()}))}),200)}}scheduleInterval(e,t,i){return(0,m.runTask)(this,(()=>{if(!this.isDestroying){this[t]=this.scheduleInterval(e,t,i)
e.apply(this)}}),i)}delayedAutocloseReactors(e){const{emoji:t}=e
this.delayedAutocloseReactorsTasks[t]=(0,m.runTask)(this,(()=>{(0,b.isDestroying)(this)||this.stopShowingReactors(e)}),3e3)}showReactors(t){const{emoji:i}=t
if(this.reactionBeingViewed&&this.reactionBeingViewed.emoji===t.emoji)return
const r=(0,m.runTask)(this,(()=>{this.msgDataManager.fetchReactors(this.args.viewData.messageUrnForReactors,t,this.args.viewData.conversationUrn).then((r=>{if(!(0,b.isDestroying)(this)&&void 0!==this.delayedShowReactorTasks[i]&&r.length){const a=this.reactionListEl.querySelector(`[data-reaction-id="${i}"]`)
this.reactionBeingViewed=t
this.isAutocloseTooltipEnabled&&this.delayedAutocloseReactors(t)
const o=a.closest(".msg-reactions-reaction-summary-presenter__pill-container").getBoundingClientRect()
this.reactorListStyle=`top:${o.top}px;left:${o.left}px;`
const n=(0,s.removeSkintoneFromEmojis)(i),{i18nNameKey:l}=c.default.find((e=>e.unicode===n))
this.emojiI18nName=l?this.i18n.lookupTranslation(N.default,l)():i
this.displayedReactorNames=this._reactorsToReactorNamesDisplay(r)
this.a11yNotification.setTextInLiveRegion(this.i18n.lookupTranslation(e,"i18n_a11y_reactors_full_names")([{reactorNames:this.displayedReactorNames,emojiName:this.emojiI18nName}]))
if(this.displayedReactorNames.length!==t.count){this.clientSensor.incrementMetricCounter({groupName:"messaging",metricName:"reaction-count-mismatch"})
this.jet.info(new Error("Reaction count from summary mismatches with number of reactors"),[`reactors list length: ${this.displayedReactorNames.length}`,`reaction summary count: ${t.count}`,`self reacted: ${t.viewerReacted}`])}}}))}),200)
this.delayedShowReactorTasks[i]=r}_reactorsToReactorNamesDisplay(e){const{miniProfile:t}=this.authenticatedUser,i=t.dashEntityUrn,r=e.map((e=>e.hostIdentityUrn===i?this.selfDisplayName:"ORGANIZATION"===e.kind?{firstName:e.name.text}:{firstName:e.firstName,lastName:e.lastName}));(null==r?void 0:r[0])===this.selfDisplayName&&(r[0]=this.selfDisplayNameCapitalized)
return r}stopShowingReactors(e,t){if(t&&"blur"===t.type&&!t.relatedTarget)return
const{emoji:i}=e,r=this.delayedShowReactorTasks[i]
if(this.isAutocloseTooltipEnabled){const e=this.delayedAutocloseReactorsTasks[i]
if(e){(0,m.cancelTask)(this,e)
delete this.delayedShowReactorTasks[i]}}if(r){(0,m.cancelTask)(this,r)
delete this.delayedShowReactorTasks[i]
this.reactionBeingViewed=void 0
this.displayedReactorNames=void 0}}onReactorsKeyUp(e,t){"keyup"===t.type&&t.which===l.default.KEYCODES.ESC&&this.stopShowingReactors(e)}},C=(0,r.default)(U.prototype,"i18n",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=(0,r.default)(U.prototype,"msgDataManager",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),q=(0,r.default)(U.prototype,"authenticatedUser",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=(0,r.default)(U.prototype,"a11yNotification",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=(0,r.default)(U.prototype,"clientSensor",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=(0,r.default)(U.prototype,"jet",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$=(0,r.default)(U.prototype,"reactionBeingViewed",[p.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=(0,r.default)(U.prototype,"triggerData",[p.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=(0,r.default)(U.prototype,"displayedReactorNames",[p.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=(0,r.default)(U.prototype,"emojiI18nName",[p.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),W=(0,r.default)(U.prototype,"reactorListStyle",[p.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),J=(0,r.default)(U.prototype,"tracking",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=(0,r.default)(U.prototype,"lix",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,r.default)(U.prototype,"toggleExistingReaction",[f.action],Object.getOwnPropertyDescriptor(U.prototype,"toggleExistingReaction"),U.prototype),(0,r.default)(U.prototype,"addReactionToMessageEvent",[f.action],Object.getOwnPropertyDescriptor(U.prototype,"addReactionToMessageEvent"),U.prototype),(0,r.default)(U.prototype,"showReactors",[f.action],Object.getOwnPropertyDescriptor(U.prototype,"showReactors"),U.prototype),(0,r.default)(U.prototype,"stopShowingReactors",[f.action],Object.getOwnPropertyDescriptor(U.prototype,"stopShowingReactors"),U.prototype),(0,r.default)(U.prototype,"onReactorsKeyUp",[f.action],Object.getOwnPropertyDescriptor(U.prototype,"onReactorsKeyUp"),U.prototype),U))}))
define.alias("ember-vector-images/components/lazy-background","msg-reactions/components/lazy-background")
define.alias("ember-vector-images/components/lazy-image","msg-reactions/components/lazy-image")
define.alias("artdeco-icons-web/components/linkedin-logo","msg-reactions/components/linkedin-logo")
define("msg-reactions/config/environment",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
let t
try{const e="msg-reactions/config/environment",i=document.querySelector('meta[name="'+e+'"]').getAttribute("content")
t=JSON.parse(unescape(i))}catch(e){t={}}e.default=t}))
define.alias("ember-truth-helpers/helpers/and","msg-reactions/helpers/and")
define.alias("ember-holy-futuristic-template-namespacing-batman/helpers/-translate-dynamic-2","msg-reactions/helpers/ember-holy-futuristic-template-namespacing-batman-translate-dynamic-2")
define.alias("ember-truth-helpers/helpers/eq","msg-reactions/helpers/eq")
define.alias("ember-cli-pemberly-i18n/helpers/format-number","msg-reactions/helpers/format-number")
define.alias("ember-truth-helpers/helpers/gt","msg-reactions/helpers/gt")
define.alias("ember-truth-helpers/helpers/gte","msg-reactions/helpers/gte")
define.alias("@linkedin/hue-web-artdeco-migration-runtime/helpers/convert-to-icon-name","msg-reactions/helpers/hue-web-artdeco-icon-migration-runtime")
define.alias("@linkedin/hue-web-artdeco-migration-runtime/helpers/convert-to-icon-v2","msg-reactions/helpers/hue-web-artdeco-li-icon-migration-runtime-v2")
define.alias("@linkedin/hue-web-artdeco-migration-runtime/helpers/convert-to-icon-path","msg-reactions/helpers/hue-web-artdeco-li-icon-migration-runtime")
define.alias("@linkedin/hue-web-artdeco-migration-runtime/helpers/convert-argument","msg-reactions/helpers/hue-web-artdeco-migration-runtime")
define.alias("ember-truth-helpers/helpers/is-array","msg-reactions/helpers/is-array")
define.alias("ember-truth-helpers/helpers/is-empty","msg-reactions/helpers/is-empty")
define.alias("ember-truth-helpers/helpers/is-equal","msg-reactions/helpers/is-equal")
define.alias("artdeco-icons-web/helpers/li-icon","msg-reactions/helpers/li-icon")
define.alias("ember-async-data/helpers/load","msg-reactions/helpers/load")
define.alias("ember-truth-helpers/helpers/lt","msg-reactions/helpers/lt")
define.alias("ember-truth-helpers/helpers/lte","msg-reactions/helpers/lte")
define.alias("ember-truth-helpers/helpers/not-eq","msg-reactions/helpers/not-eq")
define.alias("ember-truth-helpers/helpers/not","msg-reactions/helpers/not")
define.alias("ember-truth-helpers/helpers/or","msg-reactions/helpers/or")
define.alias("ember-app-scheduler/helpers/route-idle","msg-reactions/helpers/route-idle")
define.alias("ember-set-helper/helpers/set","msg-reactions/helpers/set")
define.alias("ember-cli-pemberly-i18n/helpers/t","msg-reactions/helpers/t")
define.alias("ember-truth-helpers/helpers/xor","msg-reactions/helpers/xor")
define.alias("ember-uuid","msg-reactions/index")
define("msg-reactions/initializers/icons",["exports","artdeco-icons-web/src/icons","msg-reactions/config/environment"],(function(e,t,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
function r(e){throw e}e.default={name:"icons",initialize:function(){const{environment:e,APP:a}=i.default
let o,n
a&&({artdecoCustomSpriteUrl:o,artdecoCustomSpriteName:n}=a)
const s="test"!==e
t.default.load(s,o,n).catch(r)}}}))
define.alias("ember-cli-pemberly-lix/initializers/lix","msg-reactions/initializers/lix")
define.alias("ember-m3/initializers/m3-store","msg-reactions/initializers/m3-store")
define.alias("@ember/render-modifiers/modifiers/did-insert","msg-reactions/modifiers/did-insert")
define.alias("@ember/render-modifiers/modifiers/did-update","msg-reactions/modifiers/did-update")
define.alias("@ember/render-modifiers/modifiers/will-destroy","msg-reactions/modifiers/will-destroy")
define.alias("artdeco-modal/services/artdeco-modal","msg-reactions/services/artdeco-modal")
define.alias("artdeco-toast/services/artdeco-toast","msg-reactions/services/artdeco-toast")
define.alias("client-sensor-web/services/client-sensor","msg-reactions/services/client-sensor")
define.alias("ember-date-service/services/date","msg-reactions/services/date")
define.alias("@linkedin/ember-restli-graphql/services/graphql","msg-reactions/services/graphql")
define.alias("@linkedin/ember-pem/services/internal-event-utils","msg-reactions/services/internal-event-utils")
define.alias("@linkedin/ember-pem/services/internal-pem-tracking","msg-reactions/services/internal-pem-tracking")
define.alias("ember-cli-pemberly-lix/services/lix","msg-reactions/services/lix")
define.alias("ember-m3/services/m3-schema-manager","msg-reactions/services/m3-schema-manager")
define.alias("@linkedin/ember-pem/services/pem-response-metadata","msg-reactions/services/pem-response-metadata")
define.alias("@linkedin/ember-pem/services/pem-tracking","msg-reactions/services/pem-tracking")
define.alias("persistent-toast-manager/services/persistent-toast-manager","msg-reactions/services/persistent-toast-manager")
define.alias("ember-cli-pemberly-m3/services/store","msg-reactions/services/store")
define.alias("@linkedin/ember-pem/services/tracer","msg-reactions/services/tracer")
define("msg-reactions/template-registry",[],(function(){}))
define.alias("ember-async-data/tracked-async-data","msg-reactions/tracked-async-data")
define.alias("client-sensor-web/utils/helpers","msg-reactions/utils/helpers")
define.alias("@linkedin/hue-web-artdeco-migration-runtime/utils/mapping-data","msg-reactions/utils/mapping-data")
define("msg-reactions/utils/uuid-generator",["exports","ember-uuid/utils/uuid-generator"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})
Object.defineProperty(e,"parse",{enumerable:!0,get:function(){return t.parse}})
Object.defineProperty(e,"unparse",{enumerable:!0,get:function(){return t.unparse}})
Object.defineProperty(e,"v1",{enumerable:!0,get:function(){return t.v1}})
Object.defineProperty(e,"v4",{enumerable:!0,get:function(){return t.v4}})}))
define.alias("ember-vector-images/utils/vector-url","msg-reactions/utils/vector-url")

//# sourceMappingURL=engine.map