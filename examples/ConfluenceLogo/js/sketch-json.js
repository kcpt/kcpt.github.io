var sketch = {
  "metadata": {
    "width": 871,
    "height": 112,
    "wsp-version": "4.1.0",
    "wsp-build-number": "832.19-r",
    "wsp-build-stamp": "dn.kcptech.com/20150326113246",
    "exporter-version": "5.03A2011(dev)",
    "exporter-build": "2011(dev)",
    "exporter-debug": true,
    "original-document-name": "ConfluenceLogo.gsp",
    "start-page": "1"
  },
  "resources": {
    "fontList": [
      "\"Times\", sans-serif",
      "\"Times New Roman\", sans-serif",
      "\"Arial\", sans-serif"
    ]
  },
  "pages": [
    {
      "metadata": {
        "title": "1",
        "id": "1",
        "sketchRect": {
          "top": 0,
          "left": 0,
          "bottom": 112,
          "right": 871
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "ActionButton": {
            "color": "rgb(255,128,0)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Times\", sans-serif",
              "font-size": 14,
              "font-style": "italic"
            },
            "Caption": {
              "font-family": "\"Times\", sans-serif"
            },
            "Measurement": {
              "font-family": "\"Times\", sans-serif",
              "font-size": 14
            },
            "Action": {
              "label": {
                "font-family": "\"Arial\", sans-serif"
              }
            },
            "Table": {
              "font-family": "\"Arial\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Geneva\", sans-serif"
            }
          }
        },
        "limitScrolling": true
      },
      "objects": {
        "1": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 420,
              "y": 58
            }
          },
          "debug": {
            "exists": true,
            "loc": {
              "x": 420,
              "y": 58
            }
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 420,
              "y": 99
            }
          },
          "label": "O",
          "debug": {
            "exists": true,
            "loc": {
              "x": 420,
              "y": 99
            }
          }
        },
        "3": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "1",
            "p1": "2"
          },
          "constraint": "CircleFromTwoPoints",
          "debug": {
            "exists": true,
            "c": {
              "x": 420,
              "y": 58
            },
            "r": 41,
            "pathPositions": {
              "zeroPosition": {
                "x": 461,
                "y": 58
              },
              "zeroDerivative": {
                "x": 0,
                "y": -41
              },
              "middlePosition": {
                "x": 379,
                "y": 58.000000000000284
              },
              "middleDerivative": {
                "x": -5.020886050671747e-15,
                "y": 41
              },
              "onePosition": {
                "x": 461,
                "y": 58
              },
              "oneDerivative": {
                "x": 1.0041772101343494e-14,
                "y": -41
              }
            }
          }
        },
        "4": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "2",
            "p1": "1"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true,
            "line-style": "dashed",
            "width": 1
          },
          "debug": {
            "exists": true,
            "p0": {
              "x": 420,
              "y": 99
            },
            "p1": {
              "x": 420,
              "y": 58
            },
            "pathPositions": {
              "zeroPosition": {
                "x": 420,
                "y": 99
              },
              "zeroDerivative": {
                "x": 0,
                "y": -41
              },
              "middlePosition": {
                "x": 420,
                "y": 78.5
              },
              "middleDerivative": {
                "x": 0,
                "y": -41
              },
              "onePosition": {
                "x": 420,
                "y": 58
              },
              "oneDerivative": {
                "x": 0,
                "y": -41
              }
            }
          }
        },
        "5": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "4",
            "circle": "3"
          },
          "constraint": "Intersection2",
          "label": "M",
          "style": {
            "radius": 2
          },
          "debug": {
            "exists": true,
            "loc": {
              "x": 420,
              "y": 17
            }
          }
        },
        "6": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "5",
            "line": "4"
          },
          "constraint": "Perpendicular",
          "style": {
            "width": 1
          },
          "debug": {
            "exists": true,
            "p0": {
              "x": 399.5,
              "y": 17
            },
            "p1": {
              "x": 440.5,
              "y": 17
            },
            "pathPositions": {
              "zeroPosition": {
                "x": 399.5,
                "y": 17
              },
              "zeroDerivative": {
                "x": 41,
                "y": 0
              },
              "middlePosition": {
                "x": 420,
                "y": 17
              },
              "middleDerivative": {
                "x": 41,
                "y": 0
              },
              "onePosition": {
                "x": 440.5,
                "y": 17
              },
              "oneDerivative": {
                "x": 41,
                "y": 0
              }
            }
          }
        },
        "7": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "3"
          },
          "value": 0.00038018069537185047,
          "constraint": "PointOnPath",
          "label": "A",
          "debug": {
            "exists": true,
            "loc": {
              "x": 460.99988302487645,
              "y": 57.90206151701271
            },
            "value": 0.00038018069537185047
          }
        },
        "8": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "2",
            "p1": "7"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true,
            "line-style": "dashed",
            "width": 1
          },
          "debug": {
            "exists": true,
            "p0": {
              "x": 420,
              "y": 99
            },
            "p1": {
              "x": 460.99988302487645,
              "y": 57.90206151701271
            },
            "pathPositions": {
              "zeroPosition": {
                "x": 420,
                "y": 99
              },
              "zeroDerivative": {
                "x": 40.99988302487645,
                "y": -41.09793848298729
              },
              "middlePosition": {
                "x": 440.4999415124382,
                "y": 78.45103075850636
              },
              "middleDerivative": {
                "x": 40.99988302487645,
                "y": -41.09793848298729
              },
              "onePosition": {
                "x": 460.99988302487645,
                "y": 57.90206151701271
              },
              "oneDerivative": {
                "x": 40.99988302487645,
                "y": -41.09793848298729
              }
            }
          }
        },
        "9": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "8",
            "line1": "6"
          },
          "constraint": "Intersection",
          "label": "N",
          "style": {
            "radius": 2
          },
          "debug": {
            "exists": true,
            "loc": {
              "x": 501.80435642609126,
              "y": 17.0000000000001
            }
          }
        },
        "10": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "7",
            "line": "6"
          },
          "constraint": "Parallel",
          "style": {
            "width": 1
          },
          "debug": {
            "exists": true,
            "p0": {
              "x": 440.49988302487645,
              "y": 57.90206151701271
            },
            "p1": {
              "x": 481.49988302487645,
              "y": 57.90206151701271
            },
            "pathPositions": {
              "zeroPosition": {
                "x": 440.49988302487645,
                "y": 57.90206151701271
              },
              "zeroDerivative": {
                "x": 41,
                "y": 0
              },
              "middlePosition": {
                "x": 460.99988302487645,
                "y": 57.90206151701271
              },
              "middleDerivative": {
                "x": 41,
                "y": 0
              },
              "onePosition": {
                "x": 481.49988302487645,
                "y": 57.90206151701271
              },
              "oneDerivative": {
                "x": 41,
                "y": 0
              }
            }
          }
        },
        "11": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "9",
            "line": "6"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          },
          "debug": {
            "exists": true,
            "p0": {
              "x": 501.8043564260913,
              "y": -3.4999999999998863
            },
            "p1": {
              "x": 501.8043564260913,
              "y": 37.500000000000114
            },
            "pathPositions": {
              "zeroPosition": {
                "x": 501.8043564260913,
                "y": -3.4999999999998863
              },
              "zeroDerivative": {
                "x": 0,
                "y": 41
              },
              "middlePosition": {
                "x": 501.8043564260913,
                "y": 17.000000000000114
              },
              "middleDerivative": {
                "x": 0,
                "y": 41
              },
              "onePosition": {
                "x": 501.8043564260913,
                "y": 37.500000000000114
              },
              "oneDerivative": {
                "x": 0,
                "y": 41
              }
            }
          }
        },
        "12": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "10",
            "line1": "11"
          },
          "constraint": "Intersection",
          "label": "P",
          "style": {
            "traced": true,
            "color": "green"
          },
          "debug": {
            "exists": true,
            "loc": {
              "x": 501.80435642609126,
              "y": 57.90206151701271
            }
          }
        },
        "13": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "5",
            "p1": "7"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true,
            "line-style": "dashed",
            "width": 1
          },
          "debug": {
            "exists": true,
            "p0": {
              "x": 420,
              "y": 17
            },
            "p1": {
              "x": 460.99988302487645,
              "y": 57.90206151701271
            },
            "pathPositions": {
              "zeroPosition": {
                "x": 420,
                "y": 17
              },
              "zeroDerivative": {
                "x": 40.99988302487645,
                "y": 40.90206151701271
              },
              "middlePosition": {
                "x": 440.4999415124382,
                "y": 37.451030758506356
              },
              "middleDerivative": {
                "x": 40.99988302487645,
                "y": 40.90206151701271
              },
              "onePosition": {
                "x": 460.99988302487645,
                "y": 57.90206151701271
              },
              "oneDerivative": {
                "x": 40.99988302487645,
                "y": 40.90206151701271
              }
            }
          }
        },
        "14": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "2",
            "line": "4"
          },
          "constraint": "Perpendicular",
          "style": {
            "width": 1
          },
          "debug": {
            "exists": true,
            "p0": {
              "x": 399.5,
              "y": 99
            },
            "p1": {
              "x": 440.5,
              "y": 99
            },
            "pathPositions": {
              "zeroPosition": {
                "x": 399.5,
                "y": 99
              },
              "zeroDerivative": {
                "x": 41,
                "y": 0
              },
              "middlePosition": {
                "x": 420,
                "y": 99
              },
              "middleDerivative": {
                "x": 41,
                "y": 0
              },
              "onePosition": {
                "x": 440.5,
                "y": 99
              },
              "oneDerivative": {
                "x": 41,
                "y": 0
              }
            }
          }
        },
        "15": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "13",
            "line1": "14"
          },
          "constraint": "Intersection",
          "label": "N'",
          "style": {
            "radius": 2
          },
          "debug": {
            "exists": true,
            "loc": {
              "x": 502.19611147573806,
              "y": 99.0000000000001
            }
          }
        },
        "16": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "15",
            "line": "14"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "width": 1
          },
          "debug": {
            "exists": true,
            "p0": {
              "x": 502.196111475738,
              "y": 78.50000000000011
            },
            "p1": {
              "x": 502.196111475738,
              "y": 119.50000000000011
            },
            "pathPositions": {
              "zeroPosition": {
                "x": 502.196111475738,
                "y": 78.50000000000011
              },
              "zeroDerivative": {
                "x": 0,
                "y": 41
              },
              "middlePosition": {
                "x": 502.196111475738,
                "y": 99.00000000000011
              },
              "middleDerivative": {
                "x": 0,
                "y": 41
              },
              "onePosition": {
                "x": 502.196111475738,
                "y": 119.50000000000011
              },
              "oneDerivative": {
                "x": 0,
                "y": 41
              }
            }
          }
        },
        "17": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "10",
            "line1": "16"
          },
          "constraint": "Intersection",
          "label": "P'",
          "style": {
            "traced": true,
            "color": "green"
          },
          "debug": {
            "exists": true,
            "loc": {
              "x": 502.196111475738,
              "y": 57.90206151701271
            }
          }
        },
        "18": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "7"
          },
          "geom": {
            "loc": {
              "x": 16,
              "y": 9
            }
          },
          "label": "Animate",
          "style": {
            "hidden": true,
            "label": {
              "font-size": 12
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate"
          ],
          "animationStates": [
            {
              "rate": 3,
              "timeInterval": 0,
              "repeat": false,
              "motionType": "forward"
            }
          ],
          "debug": {
            "exists": true
          }
        },
        "19": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "2",
            "p1": "5"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          },
          "debug": {
            "exists": true,
            "p0": {
              "x": 420,
              "y": 99
            },
            "p1": {
              "x": 420,
              "y": 17
            },
            "pathPositions": {
              "zeroPosition": {
                "x": 420,
                "y": 99
              },
              "zeroDerivative": {
                "x": 0,
                "y": -82
              },
              "middlePosition": {
                "x": 420,
                "y": 58
              },
              "middleDerivative": {
                "x": 0,
                "y": -82
              },
              "onePosition": {
                "x": 420,
                "y": 17
              },
              "oneDerivative": {
                "x": 0,
                "y": -82
              }
            }
          }
        },
        "20": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "2",
            "p1": "9"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          },
          "debug": {
            "exists": true,
            "p0": {
              "x": 420,
              "y": 99
            },
            "p1": {
              "x": 501.80435642609126,
              "y": 17.0000000000001
            },
            "pathPositions": {
              "zeroPosition": {
                "x": 420,
                "y": 99
              },
              "zeroDerivative": {
                "x": 81.80435642609126,
                "y": -81.9999999999999
              },
              "middlePosition": {
                "x": 460.90217821304566,
                "y": 58.00000000000005
              },
              "middleDerivative": {
                "x": 81.80435642609126,
                "y": -81.9999999999999
              },
              "onePosition": {
                "x": 501.80435642609126,
                "y": 17.0000000000001
              },
              "oneDerivative": {
                "x": 81.80435642609126,
                "y": -81.9999999999999
              }
            }
          }
        },
        "21": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "5",
            "p1": "15"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          },
          "debug": {
            "exists": true,
            "p0": {
              "x": 420,
              "y": 17
            },
            "p1": {
              "x": 502.19611147573806,
              "y": 99.0000000000001
            },
            "pathPositions": {
              "zeroPosition": {
                "x": 420,
                "y": 17
              },
              "zeroDerivative": {
                "x": 82.19611147573806,
                "y": 82.0000000000001
              },
              "middlePosition": {
                "x": 461.098055737869,
                "y": 58.00000000000005
              },
              "middleDerivative": {
                "x": 82.19611147573806,
                "y": 82.0000000000001
              },
              "onePosition": {
                "x": 502.19611147573806,
                "y": 99.0000000000001
              },
              "oneDerivative": {
                "x": 82.19611147573806,
                "y": 82.0000000000001
              }
            }
          }
        },
        "22": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "9",
            "p1": "15"
          },
          "constraint": "Segment",
          "style": {
            "width": 1
          },
          "debug": {
            "exists": true,
            "p0": {
              "x": 501.80435642609126,
              "y": 17.0000000000001
            },
            "p1": {
              "x": 502.19611147573806,
              "y": 99.0000000000001
            },
            "pathPositions": {
              "zeroPosition": {
                "x": 501.80435642609126,
                "y": 17.0000000000001
              },
              "zeroDerivative": {
                "x": 0.39175504964680385,
                "y": 82
              },
              "middlePosition": {
                "x": 502.00023395091466,
                "y": 58.0000000000001
              },
              "middleDerivative": {
                "x": 0.39175504964680385,
                "y": 82
              },
              "onePosition": {
                "x": 502.19611147573806,
                "y": 99.0000000000001
              },
              "oneDerivative": {
                "x": 0.39175504964680385,
                "y": 82
              }
            }
          }
        }
      }
    }
  ]
};