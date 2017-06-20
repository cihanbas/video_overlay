/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-ReminderPinv2': '&#xe900;',
		'icon-RemoteOkButon': '&#xe901;',
		'icon-RemoteTurksat': '&#xe902;',
		'icon-Search': '&#xe903;',
		'icon-seperator': '&#xe904;',
		'icon-SoundFile': '&#xe905;',
		'icon-tl': '&#xe906;',
		'icon-topbottomArrow': '&#xe907;',
		'icon-Tv': '&#xe908;',
		'icon-UpArrow': '&#xe909;',
		'icon-VideoFile': '&#xe90a;',
		'icon-VideoMark': '&#xe90b;',
		'icon-VoiceRemote': '&#xe90c;',
		'icon-Volume': '&#xe90d;',
		'icon-Volume1': '&#xe90e;',
		'icon-Volume2': '&#xe90f;',
		'icon-Volume3': '&#xe910;',
		'icon-WatchIcon': '&#xe911;',
		'icon-ActiveRadioBtn': '&#xe912;',
		'icon-ColorMenu': '&#xe913;',
		'icon-FolderFile': '&#xe914;',
		'icon-FunctionIcon': '&#xe915;',
		'icon-ImageFile': '&#xe916;',
		'icon-ListRemoveIcon': '&#xe917;',
		'icon-LowBatery': '&#xe918;',
		'icon-Mail': '&#xe919;',
		'icon-MarkPin': '&#xe91a;',
		'icon-MarkSingle': '&#xe91b;',
		'icon-Mute': '&#xe91c;',
		'icon-Position': '&#xe91d;',
		'icon-Radio': '&#xe91e;',
		'icon-RadioBtn': '&#xe91f;',
		'icon-ReminderClock': '&#xe920;',
		'icon-ReminderPin': '&#xe921;',
		'icon-xNext': '&#xe922;',
		'icon-xPrev': '&#xe923;',
		'icon-xNext2': '&#xe924;',
		'icon-xPrev2': '&#xe925;',
		'icon-xNext3': '&#xe926;',
		'icon-xPrev3': '&#xe927;',
		'icon-xNext4': '&#xe928;',
		'icon-xPrev4': '&#xe929;',
		'icon-xNext5': '&#xe92a;',
		'icon-xPrev5': '&#xe92b;',
		'icon-GoLiveTv': '&#xe92c;',
		'icon-GoLiveTv2': '&#xe92d;',
		'icon-GoToTime1': '&#xe92e;',
		'icon-GoToTime2': '&#xe92f;',
		'icon-Info': '&#xe930;',
		'icon-info-LivePlayer': '&#xe933;',
		'icon-info-VodPlayer': '&#xe934;',
		'icon-JoinLive': '&#xe935;',
		'icon-Lang': '&#xe936;',
		'icon-LangInfoIcon': '&#xe937;',
		'icon-Lang-LivePlayer': '&#xe938;',
		'icon-Lang-VodPlayer': '&#xe939;',
		'icon-Next': '&#xe93a;',
		'icon-Pause': '&#xe93b;',
		'icon-PIP': '&#xe93c;',
		'icon-Play': '&#xe93d;',
		'icon-Prev': '&#xe93e;',
		'icon-Record': '&#xe93f;',
		'icon-Record-LivePlayer': '&#xe940;',
		'icon-RecordStop': '&#xe941;',
		'icon-RecordStop-LivePlayer': '&#xe942;',
		'icon-Rewind': '&#xe943;',
		'icon-Subtitle': '&#xe944;',
		'icon-txt-LivePlayer': '&#xe945;',
		'icon-txt-VodPlayer': '&#xe946;',
		'icon-down2': '&#xe947;',
		'icon-DownRadiusOk2': '&#xe948;',
		'icon-Left2': '&#xe949;',
		'icon-LeftRadiusOk2': '&#xe94a;',
		'icon-Right2': '&#xe94b;',
		'icon-RightRadiusOk2': '&#xe94c;',
		'icon-top2': '&#xe94d;',
		'icon-TopRadiusOk2': '&#xe94e;',
		'icon-DVB-C-In': '&#xe94f;',
		'icon-DVB-C-NotConnect': '&#xe950;',
		'icon-Network-In': '&#xe951;',
		'icon-Network-NotConnect': '&#xe952;',
		'icon-SimCard-In': '&#xe953;',
		'icon-SimCard-NotConnect': '&#xe954;',
		'icon-Usb-In': '&#xe955;',
		'icon-Usb-NotConnect': '&#xe956;',
		'icon-123': '&#xe957;',
		'icon-ABC': '&#xe958;',
		'icon-Delete': '&#xe959;',
		'icon-Delete2': '&#xe95a;',
		'icon-Space': '&#xe95b;',
		'icon-7YasUzeri': '&#xe95c;',
		'icon-13YasUzeri': '&#xe95d;',
		'icon-18YasUzeri': '&#xe95e;',
		'icon-cinsellikUnsuruIcerir': '&#xe95f;',
		'icon-GenelIzleyici': '&#xe960;',
		'icon-olumsuzOrnekGosterici': '&#xe961;',
		'icon-SiddetUnsuruIcerir': '&#xe962;',
		'icon-down': '&#xe963;',
		'icon-down22': '&#xe964;',
		'icon-DownRadiusOk': '&#xe965;',
		'icon-Left': '&#xe966;',
		'icon-LeftRadiusOk': '&#xe967;',
		'icon-RightRadiusOk': '&#xe968;',
		'icon-Rigth': '&#xe969;',
		'icon-up': '&#xe96a;',
		'icon-UpRadiusOk': '&#xe96b;',
		'icon-Channel2k': '&#xe96c;',
		'icon-Channel4k': '&#xe96d;',
		'icon-ChannelFavoriteActive': '&#xe96e;',
		'icon-ChannelFavoritePassive': '&#xe96f;',
		'icon-Channelhd': '&#xe970;',
		'icon-ChannelList': '&#xe971;',
		'icon-ChannelLock': '&#xe972;',
		'icon-ChannelPassword': '&#xe973;',
		'icon-Channelsd': '&#xe974;',
		'icon-ChannelUnlock': '&#xe975;',
		'icon-Raiting': '&#xe976;',
		'icon-RaitingPassive': '&#xe977;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
