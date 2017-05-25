'use strict';

// Write code that stops form from submitting
$(document).ready( function(){
    $('form').submit( function(event){
        event.preventDefault();
        const dataForServer = $(this).serialize();

        $.ajax({
            url: '/results',
            method: 'post',
            data: dataForServer,
            success: function(responseFromServer){
                const htmlTags = `
                    <div id='headerDiv'><h3>Submitted Information</h3></div>
                        <div id="infoDiv">
                            <table>
                                  <tr>
                                    <td>Name:</td>
                                    <td>${responseFromServer.name}</td>
                                  </tr>
                                  <tr>
                                    <td>Dojo Location:</td>
                                    <td>${responseFromServer.location}</td>
                                  </tr>
                                  <tr>
                                    <td>Favorite Language:</td>
                                    <td>${responseFromServer.language}</td>
                                  </tr>
                                  <tr>
                                    <td>Comment:</td>
                                    <td>${responseFromServer.comment}</td>
                                  </tr>
                            </table>
                        </div>
                        <div id='buttonDiv'>
                            <button>Go Back</button>
                        </div>
                    </div>
                `;
                $('.main-content').html(htmlTags);
            }
        });
        
    });
});