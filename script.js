function Jump(x)
{
	if (x==1)
	{
		$("#content2,#content3,#content4,#content5,#content6,#content7,#content8").hide();
		$("#content1").show();
	}
	if (x==2)
	{
		$("#content1,#content3,#content4,#content5,#content6,#content7,#content8").hide();
		$("#content2").show();
	}
	if (x==3)
	{
		$("#content1,#content2,#content4,#content5,#content6,#content7,#content8").hide();
		$("#content3").show();
	}
	if (x==4)
	{
		$("#content1,#content2,#content3,#content5,#content6,#content7,#content8").hide();
		$("#content4").show();
	}
	if (x==5)
	{
		$("#content1,#content2,#content3,#content4,#content6,#content7,#content8").hide();
		$("#content5").show();
	}
	if (x==6)
	{
		$("#content1,#content2,#content3,#content4,#content5,#content7,#content8").hide();
		$("#content6").show();
	}
	if (x==7)
	{
		$("#content1,#content2,#content3,#content4,#content5,#content6,#content8").hide();
		$("#content7").show();
	}
	if (x==8)
	{
		$("#content1,#content2,#content3,#content4,#content5,#content6,#content7").hide();
		$("#content8").show();
	}
}