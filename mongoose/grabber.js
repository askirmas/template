JSON.stringify({
  "$schema": "http://json-schema.org/draft-07/schema",
  "description": "https://mongoosejs.com/docs/api.html#mongoose_Mongoose-set",
  "type": "object",
  "properties": Object.fromEntries(
    [...document.querySelector('#mongoose_Mongoose-set ~ div > ul')?.children]
    .map(({childNodes}) => [...childNodes]
    .map(({textContent, tagName, href}) => {
      switch(tagName?.toLowerCase()) {
        case "code":
          return `\`${textContent}\``
        case "a":
          return `[${textContent}](${href})`
        default:
            return textContent
      }
    })
    .join("")
    )
    .map(t => {
      const propPattern = /^'([^']+)':\s*/
      , defPattern = /`?(.*?)`? by default\.\s*/
      let content = t.trim()
      
      const property = content.match(propPattern)?.[1]
      content = content.replace(propPattern, "").trim()
      const $default = content.match(defPattern)?.[1]
      , example = content.match(/^If `?([^,]+?)`?,/)?.[1]
			, source = $default ?? example 
      
      let $def
      try {
        if ($default)
          $def = JSON.parse(
            $default[0] !== "{"
            ? $default
            : $default.replace(/([a-z]+):/ig, '"$1":')
          )
      } catch(e) {}
      content = content.replace(defPattern, "").trim()
      return [
          property,
          {
            "title": content,
            "default": $def,
            "type": source === undefined ? source : typeof source,
            "examples": [example]
          }
      ]
    }
  )
)})