<script id="createBook" type="text/html">
    <div class="form-group">
        {!! Form::label('title', 'Title:') !!}
        {!! Form::text('title', null, ['class' => 'form-control']) !!}
    </div>

    <div class="form-group">
        {!! Form::label('author', 'Author:') !!}
        {!! Form::text('author', null, ['class' => 'form-control']) !!}
    </div>

    <div class="form-group">
        {!! Form::label('year', 'Year:') !!}
        {!! Form::text('year', null, ['class' => 'form-control']) !!}
    </div>

    <div class="form-group">
        {!! Form::label('genre', 'Genre:') !!}
        {!! Form::text('genre', null, ['class' => 'form-control']) !!}
    </div>

    <div class="form-group">
        {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
    </div>
</script>