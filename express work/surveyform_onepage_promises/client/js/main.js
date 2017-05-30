'use strict';
const http = axios;

// Write code that stops form from submitting
$(document).ready( function(){
    $('form').submit( function(event){
        event.preventDefault();
        const dataForServer = $(this).serialize();

        var promise = http({
            url: '/results',
            method: 'post',
            data: dataForServer
        });

        promise
          .then(function(responseFromServer){
                const data = responseFromServer.data;
                const htmlTags = `
                    <div id='headerDiv'><h3>Submitted Information</h3></div>
                        <div id="infoDiv">
                            <table>
                                  <tr>
                                    <td>Name:</td>
                                    <td>${data.name}</td>
                                  </tr>
                                  <tr>
                                    <td>Dojo Location:</td>
                                    <td>${data.location}</td>
                                  </tr>
                                  <tr>
                                    <td>Favorite Language:</td>
                                    <td>${data.language}</td>
                                  </tr>
                                  <tr>
                                    <td>Comment:</td>
                                    <td>${data.comment}</td>
                                  </tr>
                            </table>
                        </div>
                        <div id='buttonDiv'>
                            <button>Go Back</button>
                        </div>
                    </div>
                `
                $('.main-content').html(htmlTags);
        })
        .catch(function(err){
            $('.main-content').prepend("<p class='error'>There was a problem</p>");
        });
    });
});