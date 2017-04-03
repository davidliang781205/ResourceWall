<div id="profile-modal" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Create a Post</h4>
            </div>
            <div class="modal-body">
            <% if (errors.length || info.length){ %>
              <% include ./_flash %>
            <% } %>
            <%= errors %>
            </div>
        </div>
    </div>
</div>
