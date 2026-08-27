export const projects = [
  {
    title: "Multi-Resolution Breast Cancer Classification",
    desc: "A multi-resolution ensemble of lightweight CNNs (EfficientNet-B0, MobileNetV3, ShuffleNetV2) trained on multi-scale histopathology patches, reaching 95.00% test accuracy on the BACH dataset. Paired with a quantitative Grad-CAM pipeline that measures IoU overlap between model attention and clinically relevant tissue — turning \"is the model looking at the right thing?\" into a number.",
    link: "https://github.com/Srishti-Organization/breast-cancer-classification",
  },
  {
    title: "Deepfake Video Detector",
    desc: "A deep learning model that detects manipulated video content by picking up temporal inconsistencies across frames, built to verify media authenticity on noisy real-world footage.",
    link: "https://github.com/srishti-rao",
  },
  {
    title: "Dynamic QR Management",
    desc: "A service that generates user-specific dynamic QR codes with optional image customization — REST backend, relational data model, and secure API layer.",
    link: "http://170.187.232.199:8081/swagger-ui/index.html#/QR/generateQRCode",
  }
];
