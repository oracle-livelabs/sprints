# Create new FastLab content

Steps to create a new LiveLabs FastLab.

1. Create a copy of /FastLab/content/FastLab-template in /FastLab/content/
2. Rename the directory to {{topic}}
3. Rename the /FastLab/content/{{topic}}/template.md file to {{topic}}.md
4. Update /FastLab/content/{{topic}}/manifest.json
   1. Update "workshoptitle" to "{{topic}}"
   2. Update "title": "FastLab - {{topic}}"
   3. Update "filename": "../../content/{{topic}}/{{topic}}.md"
5. Fill in /FastLab/content/{{topic}}/{{topic}}.md with appropriate content.
   1. Review guidance in Markdown file

DONE


Please do not update content in common folder.