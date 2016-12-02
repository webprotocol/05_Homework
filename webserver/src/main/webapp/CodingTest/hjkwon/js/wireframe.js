function ChangeStatus( value ) {
	var StatusBox = document.getElementById("m_MemberInfo");
	StatusBox.style['display'] = value;

	switch ( value ) {
		case "none":
			document.getElementById("MT_Logged").style['display'] = "none";
			document.getElementById("MT_LoggedOut").style['display'] = "block";
			break;
		case "block":
			document.getElementById("MT_Logged").style['display'] = "block";
			document.getElementById("MT_LoggedOut").style['display'] = "none";
			break;
	}
}

function ChangeSubMenu( value ) {
	var Subs = document.getElementsByClassName("sub");
	var selected = 0;
	for ( var i = 0; i < Subs.length; i++ ) {
		if ( Subs[i] == value ) {
			Subs[i].id = "Current";
			selected = i + 1 ;
		}
		else {
			Subs[i].id = "";
		}
	}
	var MonthBox = document.getElementById("MonthName");
	MonthBox.innerHTML = GetMonthString(selected);
}

function GetMonthString( value ) {
	switch( value ) {
		case 1:
			return "January";
		case 2:
			return "February";
		case 3:
			return "March";
		case 4:
			return "April";
		case 5:
			return "May";
		case 6:
			return "June";
		case 7:
			return "July";
		case 8:
			return "August";
		case 9:
			return "September";
		case 10:
			return "October";
		case 11:
			return "November";
		case 12:
			return "December";
		default:
			return "Not a month";
	}
}