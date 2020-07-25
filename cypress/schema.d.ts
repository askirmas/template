declare const _exports: {
    "type": string;
    "$ref": string;
    "properties": {
        "env": {
            "type": string;
            "properties": {
                "cypress-plugin-snapshots": {
                    "description": string;
                    "additionalProperties": boolean;
                    "type": string;
                    "properties": {
                        "autoCleanUp": {
                            "type": string;
                            "default": boolean;
                            "title": string;
                        };
                        "autopassNewSnapshots": {
                            "type": string;
                            "default": boolean;
                            "title": string;
                        };
                        "diffLines": {
                            "type": string;
                            "default": number;
                            "title": string;
                        };
                        "excludeFields": {
                            "type": string;
                            "default": never[];
                            "title": string;
                        };
                        "ignoreExtraArrayItems": {
                            "type": string;
                            "default": boolean;
                            "title": string;
                        };
                        "ignoreExtraFields": {
                            "type": string;
                            "default": boolean;
                            "title": string;
                        };
                        "normalizeJson": {
                            "type": string;
                            "default": boolean;
                            "title": string;
                        };
                        "prettier": {
                            "type": string;
                            "default": boolean;
                            "title": string;
                        };
                        "imageConfig": {
                            "type": string;
                            "properties": {
                                "createDiffImage": {
                                    "type": string;
                                    "default": boolean;
                                    "title": string;
                                };
                                "resizeDevicePixelRatio": {
                                    "type": string;
                                    "default": boolean;
                                    "title": string;
                                };
                                "threshold": {
                                    "type": string;
                                    "default": number;
                                    "title": string;
                                };
                                "thresholdType": {
                                    "type": string;
                                    "default": string;
                                    "title": string;
                                    "enum": string[];
                                };
                            };
                        };
                        "screenshotConfig": {
                            "description": string;
                            "type": string;
                            "properties": {
                                "blackout": {
                                    "type": string;
                                    "default": never[];
                                };
                                "capture": {
                                    "type": string;
                                    "default": string;
                                };
                                "clip": {
                                    "default": null;
                                };
                                "disableTimersAndAnimations": {
                                    "default": boolean;
                                };
                                "log": {
                                    "default": boolean;
                                };
                                "scale": {
                                    "default": boolean;
                                };
                                "timeout": {
                                    "type": string;
                                    "default": number;
                                };
                            };
                        };
                        "serverEnabled": {
                            "type": string;
                            "default": boolean;
                            "title": string;
                        };
                        "serverHost": {
                            "type": string;
                            "default": string;
                            "title": string;
                        };
                        "serverPort": {
                            "type": string;
                            "default": number;
                            "title": string;
                        };
                        "updateSnapshots": {
                            "type": string;
                            "default": boolean;
                            "title": string;
                        };
                        "backgroundBlend": {
                            "type": string;
                            "default": string;
                            "title": string;
                            "description": string;
                            "enum": string[];
                        };
                    };
                };
            };
        };
    };
};
export = _exports;
