# Create new FastStart content

Steps to create a new LiveLabs FastStart.

1. Create a copy of /faststart/content/faststart-template in /faststart/content/
2. Rename the directory to {{topic}}
3. Rename the /faststart/content/{{topic}}/template.md file to {{topic}}.md
4. Update /faststart/content/{{topic}}/manifest.json
   1. Update "workshoptitle" to "{{topic}}"
   2. Update "title": "FastStart - {{topic}}"
   3. Update "filename": "../../content/{{topic}}/{{topic}}.md"
5. Fill in /faststart/content/{{topic}}/{{topic}}.md with appropriate content.
   1. Review guidance in Markdown file

DONE


Please do not update content in common folder.