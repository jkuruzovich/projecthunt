/**
 * Created by jkuruzovich on 4/25/15.
 */
var thumbnailProperty = {
  propertyName: 'thumbnailUrl',
  propertySchema: {
    type: String,
    optional: true,
    label: 'Image Url'
  }
}

var url =  {
  propertyName: 'url',
  propertySchema: {
    type: String,
    label: "Image Url",
    optional: true,
    autoform: {
      editable: true,
      type: "bootstrap-url",
      omit: false
    }
  }
}

var body = {
  propertyName: 'body',
  propertySchema: {
    type: String,
    label: "Project Description",
    optional: false,
    autoform: {
      editable: true,
      rows: 10
    }
  }
}

var organizationurl =  {
  propertyName: 'organizationurl',
  propertySchema: {
    type: String,
    label: "Image Url",
    optional: true,
    autoform: {
      editable: true,
      type: "bootstrap-url",
    }
  }
}

var organization = {
  propertyName: 'organization',
  propertySchema: {
    type: String,
    label: "Organization",
    optional: true,
    autoform: {
      editable: true,
    }
  }
}


addToPostSchema.push(thumbnailProperty);
addToPostSchema.push(url);
addToPostSchema.push(body);
addToPostSchema.push(organization);
addToPostSchema.push(organizationurl);



