<?php

$connection = mysql_connect('localhost','root','root');
$db = mysql_select_db('App',$connection);

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

switch ($request->action){
	case 'saveClient':
		if(isset($request->id) && $request->id !=''){
			$sql = "UPDATE `client_details` SET client_name='".$request->name."',client_email='".$request->email."',client_phone='".$request->phone."',client_desc='".$request->desc."' where client_id=".$request->id;
		}else{
			$sql = "INSERT INTO `client_details` (`client_name`,`client_email`,`client_phone`,`client_desc`) VALUES ('".$request->name."','".$request->email."', '".$request->phone."', '".$request->desc."')";
		}
		if(mysql_query($sql,$connection)){
			echo json_encode(array('message'=>'You have successfully updated '.$request->name));
		}else{
			echo json_encode(array('message'=>mysql_error()));
		}
		break;

	case 'getClient':
		$i =1;
		if(isset($request->clientId) && $request->clientId !=''){
			$sql = "select * from client_details where client_id=".$request->clientId;
		}else {
			$sql = "select * from client_details";
		}
		$result = mysql_query($sql,$connection);
		while($row = mysql_fetch_assoc($result)){
			$clientdata[$i++] = $row;
		}
		echo json_encode($clientdata);
		break;

	case 'deleteClient':
		$i =1;
		$sql = "delete from client_details where client_id=".$request->clientId;
		if(mysql_query($sql,$connection)){
			echo json_encode(array('message'=>'You have successfully deleted a client'));
		}else{
			echo json_encode(array('message'=>mysql_error()));
		}	
		break;
	default:
		break;


}







?>