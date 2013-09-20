// JavaScript Document

$(document).ready(function()
	{
		$("#submit").click(function()
			{
				
				var valid = 0;
				function validateEmpty($obj)
				{
					if($obj.val() =="")
					{
						$obj.css("background","#C33");
						valid = 1;	
					}
					else
					{	
						$obj.removeAttr('style');
					}
				}
				
				function validateNumber($obj)
				{
					if($.isNumeric($obj.val()))
					{
						$obj.removeAttr('style');
					}
					else
					{	
						$obj.css("background","#C33");
						valid = 1;
					}
				}
				
				var p1 = $("#person1");
				validateEmpty(p1);
				
				var p2 = $("#person2");
				validateEmpty(p2);
				
				var p2g = $("input[name=p2gender]:checked");
				validateEmpty(p2g);
				
				var place = $("input[name=place]");
				validateEmpty(place);
				
				var eventType = $("[name=eventType] option:selected");
				
				var phrase = $("input[name=phrase]");
				validateEmpty(phrase);
				
				var celeb = $("[name=personality]");
				validateEmpty(celeb);
				
				var act = $("[name=activity]");
				validateEmpty(act);
				if(act.val()=="dancing")
				{
					$("#video").show();
				}
				
				var number = $("[name=number]");
				validateNumber(number);
				
				var charac = $("input[name=characteristic]:checkbox:checked");
				if (charac.length>=2)
				{ 
					$("#").removeAttr('style');
					var ch1 = charac[Math.floor(Math.random() * charac.length)].value;
					do 
					{
						var ch2 = charac[Math.floor(Math.random() * charac.length)].value;	
					}
					while (ch1 == ch2)	
				}
				else
				{
					$("#cbox").css("background","#C33");
					valid = 1;
				}
				
				
				var adj = $("input[name=adjective]");
				validateEmpty(adj);
				
				var bodyPart = $("input[name=bodyPart]");
				validateEmpty(bodyPart);
				
				var band = $("input[name=band]");
				validateEmpty(band);
				
				
				if(valid ==0)
				{
					var output = "Wednesday on <strong>"+place.val()+"</strong>, the two of them talked about the <strong>"+eventType.val()+"</strong> sensation and when asked specifically what she thought when she heard her moves had been put online, "+p1.val()+" said her reaction was, \"<strong>"+phrase.val()+"</strong>.\" When asked by <strong>"+celeb.val()+"</strong> if she simply likes to <strong>"+act.val()+"</strong> in public, <strong>"+p1.val()+"</strong> responded to <strong>"+p2g.val()+"</strong>, \"I do, unfortunately, but as the great <strong>"+p2.val()+"</strong> always said, \'I have more <strong>"+ch1+"</strong> than <strong>"+ch2+"</strong>.\'\" In the video, <strong>"+p1.val()+"</strong> is pretty <strong>"+adj.val()+"</strong>: she likes to <strong>"+act.val()+"</strong> her <strong>"+bodyPart.val()+"</strong> a bit, bounces with her knees slightly bent, moves her <strong>"+bodyPart.val()+"</strong> from side to side — all while <strong>"+band.val()+"</strong>, pedestrians and even a small dog pass by. But a signature punch move is employed at two different points and after the <strong>"+number.val()+"</strong>-minute mark, a confident, wagging finger makes an appearance. And then <strong>"+p1.val()+"</strong>'s bus arrives, and she's gone.<br><br><object width=\"560\" height=\"315\"><param name=\"movie\" value=\"http://www.youtube.com/v/MvQaY5OiCx4?hl=en_US&amp;version=3&amp;rel=0\"></param><param name=\"allowFullScreen\" value=\"true\"></param><param name=\"allowscriptaccess\" value=\"always\"></param><embed src=\"http://www.youtube.com/v/MvQaY5OiCx4?hl=en_US&amp;version=3&amp;rel=0\" type=\"application/x-shockwave-flash\" width=\"560\" height=\"315\" allowscriptaccess=\"always\" allowfullscreen=\"true\"></embed></object>";
					
				
					$("#madlib").css("color","#000");
					$("#madlib").css("background","#DDD");
					$("#madlib").html(output);
					
				}
				else
				{
					$("#madlib").html("Some inputs are incorrect");	
					$("#madlib").css("background","#C33");
					$("#madlib").css("color","#FFF");
				}
			});
		
		
	})
	

