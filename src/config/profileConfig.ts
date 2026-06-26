import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "/assets/images/avatar.jpg", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "慕雨棠",
	bio: "记录学习与生活｜持续成长",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/lzh8639-max",
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:lzh8639@gmail.com",
		},
	],
};
