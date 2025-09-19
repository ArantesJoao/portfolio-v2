import { socialLinksData } from "@/app/constants"
import NormalSocialLink from "./components/normal-social-link"
import EmailCopyLink from "./components/email-copy-link"
import CVDownloadLink from "./components/cv-download-link"

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      {socialLinksData.map((link, index) => {
        // CV Download button
        if (link.isDownload && link.showText) {
          return (
            <CVDownloadLink
              key={index}
              href={link.href}
              label={link.label}
              text={link.text!}
            />
          )
        }

        // Email copy button
        if (link.isCopyEmail) {
          return (
            <EmailCopyLink
              key={index}
              href={link.href}
              label={link.label}
            />
          )
        }

        // Normal social links (LinkedIn, GitHub)
        return (
          <NormalSocialLink
            key={index}
            href={link.href}
            icon={link.icon as "linkedin" | "github"}
            label={link.label}
          />
        )
      })}
    </div>
  )
}

export default SocialLinks
